import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * The site is a single document, so the sitemap is a single entry.
 *
 * This previously also listed `/#about`, `/#services`, `/#work` and `/#cta` as
 * separate entries. A fragment does not identify a distinct URL — crawlers
 * discard everything after the `#` — so those four resolved to the same page
 * and were ignored. `#cta` had additionally gone stale: that section is `#contact`
 * since the redesign, so the entry pointed at an anchor that no longer exists.
 *
 * Add real entries here if the site ever grows routes of its own.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
