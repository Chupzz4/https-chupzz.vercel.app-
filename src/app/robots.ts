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
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
