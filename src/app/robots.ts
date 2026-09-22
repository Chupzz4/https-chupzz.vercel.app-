import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Replaces the static public/robots.txt, which hardcoded a Sitemap URL on the
 * unresolvable capistranochristianpaul.com host. Generating it keeps the
 * sitemap pointer in sync with siteUrl.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    // No `host`: it is a Yandex-only directive that expects a bare hostname,
    // and the canonical URL already names the preferred host for Google.
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
