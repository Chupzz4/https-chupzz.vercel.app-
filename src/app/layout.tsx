import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { WebVitals } from "@/components/WebVitals";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Premium Tech VA & AI Automation Specialist | Christian Capistrano",
  description:
    "Technical Virtual Assistant specializing in AI automation, website development, sales funnels, lead generation, CRM automation, n8n integrations, and GoHighLevel systems. Build scalable business automation.",
  keywords: [
    "Technical Virtual Assistant",
    "AI Automation Specialist",
    "GTM Engineer",
    "Clay GTM Engineering",
    "Clay.com Expert",
    "Outbound Automation",
    "Lead Enrichment",
    "n8n Integrations",
    "GoHighLevel Funnels",
    "CRM Automation",
    "Lead Generation Systems",
    "Website Development",
    "Business Automation",
    "AI Workflow"
  ],
  authors: [{ name: "Christian Capistrano" }],
  creator: "Christian Capistrano",
  publisher: "Christian Capistrano",
  openGraph: {
    title: "Premium Tech VA & AI Automation Specialist",
    description:
      "Websites, funnels, and AI automation systems that help businesses save time, generate more leads, and improve conversions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christian Capistrano - Tech VA & AI Automation Specialist",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Tech VA & AI Automation Specialist",
    description: "Build scalable AI automation systems for your business",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    // The 512px icon is 155 KiB and every visit downloaded it for a 16px tab
    // slot; a 192px derivative is a few KiB and still crisp on a 4x display.
    icon: [{ url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  }
  // `verification` intentionally omitted: it previously shipped the literal
  // strings "add-your-google-verification-code" / "add-your-bing-verification-code".
  // Add it back with real tokens from Search Console / Bing Webmaster Tools.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        {/* No resource hints: next/font self-hosts Inter, so the Google Fonts
            preconnects opened two connections that nothing used; no analytics
            is installed; and Calendly now loads on scroll, well after this
            matters. Each hint here is a wasted socket on a phone. */}
      </head>
      <body className={inter.className}>
        <WebVitals />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            // Only verifiable facts belong here. The previous version published a
            // placeholder telephone ("+1-XXX-XXX-XXXX") and three sameAs profile
            // URLs that were never confirmed to exist — bad structured data is
            // worse than none. Add sameAs back once the real profiles are known.
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteUrl,
              image: absoluteUrl("/logo.png"),
              jobTitle: siteConfig.title,
              email: `mailto:${siteConfig.email}`,
              description:
                "Technical Virtual Assistant and GTM Engineer specializing in Clay-powered go-to-market systems, AI automation, website development, and business systems",
              knowsAbout: [
                "GTM Engineering",
                "Clay",
                "Lead Enrichment",
                "Outbound Automation",
                "AI Automation",
                "n8n",
                "GoHighLevel",
                "CRM Automation",
                "Sales Funnels",
                "Lead Generation"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: siteConfig.email,
                url: siteConfig.calendly,
                availableLanguage: ["en"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
