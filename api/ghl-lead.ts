const required = ["name", "email", "phone"] as const;
declare const process: { env: Record<string, string | undefined> };

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" ")
  };
}

function getEnv(name: string) {
  return process.env[name];
}

function asRecord(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, string>;
}

function optionalCustomField(envName: string, value: string | undefined) {
  const key = getEnv(envName);
  if (!key || !value) return null;
  return {
    key,
    field_value: value
  };
}

function field(body: Record<string, string>, snakeName: string, legacyName: string) {
  return body[snakeName] || body[legacyName];
}

function leadSource(body: Record<string, string>) {
  return body.leadSource || body.page || body.service || "Eden Landing Page";
}

function buildNotes(body: Record<string, string>, firstTouch: Record<string, string>, lastTouch: Record<string, string>) {
  return [
    `Landing page lead: ${leadSource(body)}`,
    body.service ? `Service Interest: ${body.service}` : "",
    body.page ? `Page: ${body.page}` : "",
    body.goal ? `Goal: ${body.goal}` : "",
    body.sourceUrl ? `Source URL: ${body.sourceUrl}` : "",
    body.landingPage ? `Landing Page: ${body.landingPage}` : "",
    body.referrer ? `Referrer: ${body.referrer}` : "",
    field(body, "utm_source", "utmSource") ? `UTM Source: ${field(body, "utm_source", "utmSource")}` : "",
    field(body, "utm_medium", "utmMedium") ? `UTM Medium: ${field(body, "utm_medium", "utmMedium")}` : "",
    field(body, "utm_campaign", "utmCampaign")
      ? `UTM Campaign: ${field(body, "utm_campaign", "utmCampaign")}`
      : "",
    field(body, "utm_term", "utmTerm") ? `UTM Term: ${field(body, "utm_term", "utmTerm")}` : "",
    field(body, "utm_content", "utmContent") ? `UTM Content: ${field(body, "utm_content", "utmContent")}` : "",
    body.gclid ? `GCLID: ${body.gclid}` : "",
    body.fbclid ? `FBCLID: ${body.fbclid}` : "",
    firstTouch.landingPage ? `First Touch Landing Page: ${firstTouch.landingPage}` : "",
    firstTouch.referrer ? `First Touch Referrer: ${firstTouch.referrer}` : "",
    field(firstTouch, "utm_source", "utmSource") ? `First Touch UTM Source: ${field(firstTouch, "utm_source", "utmSource")}` : "",
    field(lastTouch, "utm_source", "utmSource") ? `Last Touch UTM Source: ${field(lastTouch, "utm_source", "utmSource")}` : "",
    body.submittedAt ? `Submitted At: ${body.submittedAt}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function sendJson(response: any, status: number, payload: unknown) {
  response.status(status).setHeader("Content-Type", "application/json");
  response.send(typeof payload === "string" ? payload : JSON.stringify(payload));
}

export default async function handler(request: any, response: any) {
  if (request.method === "GET") {
    sendJson(response, 200, { ok: true, endpoint: "ghl-lead" });
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  let body: unknown;
  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
  } catch {
    sendJson(response, 400, { error: "Invalid JSON" });
    return;
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    sendJson(response, 400, { error: "Invalid JSON" });
    return;
  }

  const data = body as Record<string, string>;
  const missing = required.filter((name) => !data[name]?.trim());
  if (missing.length) {
    sendJson(response, 400, { error: `Missing required fields: ${missing.join(", ")}` });
    return;
  }

  const token = getEnv("GHL_PRIVATE_INTEGRATION_TOKEN");
  const locationId = getEnv("GHL_LOCATION_ID");
  const webhookUrl = getEnv("GHL_WEBHOOK_URL");
  const apiBaseUrl = getEnv("GHL_API_BASE_URL") ?? "https://services.leadconnectorhq.com";
  const apiVersion = getEnv("GHL_API_VERSION") ?? "2021-07-28";
  const source = data.leadSource || getEnv("GHL_LEAD_SOURCE") || "Eden Landing Page";
  const tags = (getEnv("GHL_LEAD_TAGS") ?? "Website Lead,Eden Landing Page")
    .split(",")
    .map((tag: string) => tag.trim())
    .filter(Boolean);

  const { firstName, lastName } = splitName(data.name);
  const firstTouch = asRecord(data.firstTouch);
  const lastTouch = asRecord(data.lastTouch);
  const notes = buildNotes(data, firstTouch, lastTouch);

  const customFields = [
    optionalCustomField("GHL_CF_SERVICE_INTEREST", data.service ?? "Eden Landing Page"),
    optionalCustomField("GHL_CF_LEAD_GOAL", data.goal),
    optionalCustomField("GHL_CF_SOURCE_URL", data.sourceUrl),
    optionalCustomField("GHL_CF_LANDING_PAGE", data.landingPage),
    optionalCustomField("GHL_CF_REFERRER", data.referrer),
    optionalCustomField("GHL_CF_UTM_SOURCE", field(data, "utm_source", "utmSource")),
    optionalCustomField("GHL_CF_UTM_MEDIUM", field(data, "utm_medium", "utmMedium")),
    optionalCustomField("GHL_CF_UTM_CAMPAIGN", field(data, "utm_campaign", "utmCampaign")),
    optionalCustomField("GHL_CF_UTM_TERM", field(data, "utm_term", "utmTerm")),
    optionalCustomField("GHL_CF_UTM_CONTENT", field(data, "utm_content", "utmContent")),
    optionalCustomField("GHL_CF_GCLID", data.gclid),
    optionalCustomField("GHL_CF_FBCLID", data.fbclid)
  ].filter(Boolean);

  const payload: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    source,
    tags,
    notes
  };

  if (customFields.length) {
    payload.customFields = customFields;
  }

  if (webhookUrl) {
    const webhookPayload = {
      ...data,
      firstName,
      lastName,
      source,
      tags,
      notes,
      firstTouch,
      lastTouch
    };
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(webhookPayload)
    });
    const webhookResult = await webhookResponse.text();
    if (!webhookResponse.ok) {
      sendJson(response, webhookResponse.status, { error: "GHL webhook request failed", detail: webhookResult });
      return;
    }

    sendJson(response, 200, webhookResult || { ok: true, path: "webhook" });
    return;
  }

  if (!token || !locationId) {
    sendJson(response, 500, { error: "GHL is not configured" });
    return;
  }

  const leadConnectorResponse = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: apiVersion,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await leadConnectorResponse.text();
  if (!leadConnectorResponse.ok) {
    sendJson(response, leadConnectorResponse.status, { error: "GHL request failed", detail: result });
    return;
  }

  sendJson(response, 200, result || { ok: true });
}
