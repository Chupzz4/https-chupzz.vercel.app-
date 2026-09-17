import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { WebVitals } from "@/components/WebVitals";
import { socials } from "@/lib/content";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

// Inter carries every piece of running text, UI label, and numeral.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
});

// Playfair is display-only: h1, h2, and pull quotes. Three weights, no italics
// and no small sizes, so the subset stays small despite the second family.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Premium Tech VA & AI Automation Specialist | Christian Capistrano",
  description:
    "AI automation, GTM engineering, websites, funnels, and CRM systems for businesses that want their backend to run itself. Clay, n8n, and GoHighLevel builds with documented handoff.",
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
  // No `icons` block: src/app/favicon.ico, icon.png and apple-icon.png are
  // picked up by the App Router file convention, and Next emits the link tags
  // with a fingerprinted URL. Declaring them here by stable /public path is
  // what made the old icon unupdatable — see the cache note in next.config.mjs.
  // `verification` intentionally omitted: it previously shipped the literal
  // strings "add-your-google-verification-code" / "add-your-bing-verification-code".
  // Add it back with real tokens from Search Console / Bing Webmaster Tools.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0C",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds `js` to this
    // element before React hydrates, so the server and client className differ
    // by design. It applies to this element's own attributes only.
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        {/* No resource hints: next/font self-hosts both families, so Google
            Fonts preconnects would open two sockets nothing uses; no analytics
            is installed; and Calendly loads on scroll, long after this matters. */}
        {/* Arms the scroll reveals, and disarms them if the app never comes up.
            `.js` is what lets globals.css hide a `.reveal`, so with scripting
            off the class is never set and the page renders in full. The timer
            covers the harder case — scripting on, but the bundle 404s or throws
            — where the observer that reveals content would never run and the
            body would stay blank. Reveal.tsx stamps `hydrated` on mount, so the
            failsafe is a no-op on any healthy load. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var d=document.documentElement;d.classList.add("js");' +
              'setTimeout(function(){if(!d.classList.contains("hydrated"))' +
              'd.classList.remove("js")},4000)})()'
          }}
        />
      </head>
      <body className={inter.className}>
        <WebVitals />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            // Only verifiable facts belong here. The previous version published a
            // placeholder telephone ("+1-XXX-XXX-XXXX") and three unconfirmed
            // sameAs URLs — bad structured data is worse than none. sameAs is
            // back now that the profiles are known, sourced from the same list
            // the footer renders so the two cannot drift apart.
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteUrl,
              sameAs: socials.map((social) => social.href),
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
