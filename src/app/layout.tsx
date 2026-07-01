import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { WebVitals } from "@/components/WebVitals";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://capistranochristianpaul.com'),
  title: "Premium Tech VA & AI Automation Specialist | Christian Capistrano",
  description:
    "Technical Virtual Assistant specializing in AI automation, website development, sales funnels, lead generation, CRM automation, n8n integrations, and GoHighLevel systems. Build scalable business automation.",
  keywords: [
    "Technical Virtual Assistant",
    "AI Automation Specialist",
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
    canonical: "https://capistranochristianpaul.com"
  },
  verification: {
    google: "add-your-google-verification-code",
    other: {
      "msvalidate.01": "add-your-bing-verification-code"
    }
  }
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" />
        {/* DNS Prefetch for analytics and third parties */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <WebVitals />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Christian Capistrano - Tech VA & AI Automation",
              url: "https://capistranochristianpaul.com",
              logo: "https://capistranochristianpaul.com/logo.png",
              description: "Technical Virtual Assistant specializing in AI automation, website development, and business systems",
              sameAs: [
                "https://linkedin.com/in/christiancapistrano",
                "https://twitter.com/capistranochristian",
                "https://github.com/capistrano"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "Customer Service",
                availableLanguage: ["en"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
