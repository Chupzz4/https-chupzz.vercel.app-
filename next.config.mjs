import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin"
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      // Files in public/ are served from the site root, so the old "/public/"
      // pattern never matched anything. Match the asset paths themselves.
      source: "/:path(images/.*|.*\.(?:png|webp|ico|svg|woff2))",
      headers: [
        {
          // `immutable` is a promise that the bytes at this URL will never
          // change, and it belongs only on content-hashed URLs — Next already
          // sets it for /_next/static itself. Applied here it covered every
          // file in public/, all of which have stable names, so replacing one
          // could not reach anyone who had already loaded it: the favicon was
          // pinned for a year. A day of caching with background revalidation
          // keeps the performance and lets updates actually land.
          key: "Cache-Control",
          value: "public, max-age=86400, stale-while-revalidate=604800"
        }
      ]
    }
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 requires every quality used in markup to be declared up front.
    qualities: [75, 88],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Same reasoning as the public/ headers above: screenshots get replaced
    // under the same filename, and a year-long TTL on the optimised copies
    // kept returning visitors on the old image long after the swap.
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    // No remotePatterns and no SVG: every image is a local raster in public/.
    // The old allowlist (unsplash, imgur, cloudinary, GitHub raw, placehold)
    // was unused and let anyone push those hosts' images through this
    // project's optimiser and its quota.
  },
  // A stray package-lock.json in the user's home folder made Next guess that
  // directory as the workspace root. Pin it to this project.
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
