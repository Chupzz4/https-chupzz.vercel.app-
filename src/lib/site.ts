/**
 * Single source of truth for the site's public identity.
 *
 * `capistranochristianpaul.com` has no DNS record, so every canonical URL,
 * sitemap entry and structured-data reference built from it pointed at a host
 * that does not resolve. Until that domain is live, this falls back to the
 * production Vercel URL that actually serves the site. Set NEXT_PUBLIC_SITE_URL
 * in the Vercel project to switch over without touching code.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://chupzz-ai.vercel.app").replace(
  /\/$/,
  ""
);

export const siteConfig = {
  name: "Christian Capistrano",
  title: "GTM & Automation Engineer",
  email: "capistranochristianpaul@gmail.com",
  calendly: "https://calendly.com/capistranochristianpaul/30min"
} as const;

export const absoluteUrl = (path = "") => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
