import type { APIRoute } from "astro";

export const prerender = false;

const required = ["name", "email", "phone"] as const;

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" ")
  };
}

function getEnv(name: string) {
  return import.meta.env[name] as string | undefined;
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

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: true, endpoint: "ghl-lead" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const missing = required.filter((field) => !body[field]?.trim());
  if (missing.length) {
    return new Response(JSON.stringify({ error: `Missing required fields: ${missing.join(", ")}` }), {
      status: 400
    });
  }

  const token = getEnv("GHL_PRIVATE_INTEGRATION_TOKEN");
  const locationId = getEnv("GHL_LOCATION_ID");
  const apiBaseUrl = getEnv("GHL_API_BASE_URL") ?? "https://services.leadconnectorhq.com";
  const apiVersion = getEnv("GHL_API_VERSION") ?? "2021-07-28";
  const source = getEnv("GHL_LEAD_SOURCE") ?? "Wolverine Stack Denver Landing Page";
  const tags = (getEnv("GHL_LEAD_TAGS") ?? "Website Lead,Wolverine Stack,Peptide Therapy,Denver LP")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (!token || !locationId) {
    return new Response(JSON.stringify({ error: "GHL is not configured" }), { status: 500 });
  }

  const { firstName, lastName } = splitName(body.name);
  const firstTouch = asRecord(body.firstTouch);
  const lastTouch = asRecord(body.lastTouch);
  const notes = [
    "Landing page lead: Wolverine Stack in Denver",
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

  const customFields = [
    optionalCustomField("GHL_CF_SERVICE_INTEREST", body.service ?? "Wolverine Stack"),
    optionalCustomField("GHL_CF_LEAD_GOAL", body.goal),
    optionalCustomField("GHL_CF_SOURCE_URL", body.sourceUrl),
    optionalCustomField("GHL_CF_LANDING_PAGE", body.landingPage),
    optionalCustomField("GHL_CF_REFERRER", body.referrer),
    optionalCustomField("GHL_CF_UTM_SOURCE", field(body, "utm_source", "utmSource")),
    optionalCustomField("GHL_CF_UTM_MEDIUM", field(body, "utm_medium", "utmMedium")),
    optionalCustomField("GHL_CF_UTM_CAMPAIGN", field(body, "utm_campaign", "utmCampaign")),
    optionalCustomField("GHL_CF_UTM_TERM", field(body, "utm_term", "utmTerm")),
    optionalCustomField("GHL_CF_UTM_CONTENT", field(body, "utm_content", "utmContent")),
    optionalCustomField("GHL_CF_GCLID", body.gclid),
    optionalCustomField("GHL_CF_FBCLID", body.fbclid)
  ].filter(Boolean);

  const payload: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    name: body.name,
    email: body.email,
    phone: body.phone,
    source,
    tags,
    notes
  };

  if (customFields.length) {
    payload.customFields = customFields;
  }

  const response = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: apiVersion,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.text();
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "GHL request failed", detail: result }), {
      status: response.status
    });
  }

  return new Response(result || JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
