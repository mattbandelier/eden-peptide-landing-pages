export type WordPressPost = {
  id: number;
  title: string;
  status: "publish" | "draft" | "future";
  date: string;
  link: string;
  excerpt: string;
};

const mockPosts: WordPressPost[] = [
  {
    id: 101,
    title: "I Connected Claude to WordPress in 5 Minutes",
    status: "draft",
    date: "2026-05-14",
    link: "https://example.com/claude-wordpress",
    excerpt:
      "A practical walkthrough for connecting AI assistants to WordPress through Application Passwords and the REST API."
  },
  {
    id: 102,
    title: "How to Build Landing Pages That Keep Improving",
    status: "publish",
    date: "2026-05-08",
    link: "https://example.com/lp-system",
    excerpt:
      "A simple operating model for reusable landing pages, cleaner campaign launches, and better publishing rhythm."
  }
];

function getEnv(name: string) {
  return import.meta.env[name] as string | undefined;
}

export function getWordPressMode() {
  return getEnv("WORDPRESS_MODE") ?? "mock";
}

export async function listRecentPosts(): Promise<WordPressPost[]> {
  if (getWordPressMode() !== "live") {
    return mockPosts;
  }

  const siteUrl = getEnv("WORDPRESS_SITE_URL");
  const username = getEnv("WORDPRESS_USERNAME");
  const appPassword = getEnv("WORDPRESS_APPLICATION_PASSWORD");

  if (!siteUrl || !username || !appPassword) {
    throw new Error("Missing WordPress credentials. Check your .env file.");
  }

  const auth = btoa(`${username}:${appPassword}`);
  const response = await fetch(`${siteUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?per_page=10`, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed: ${response.status}`);
  }

  const posts = (await response.json()) as Array<{
    id: number;
    title: { rendered: string };
    status: WordPressPost["status"];
    date: string;
    link: string;
    excerpt: { rendered: string };
  }>;

  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    status: post.status,
    date: post.date,
    link: post.link,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
  }));
}
