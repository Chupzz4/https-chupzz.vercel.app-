import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/#about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/#services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/#work`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/#cta`, lastModified, changeFrequency: "weekly", priority: 0.7 }
  ];
}
