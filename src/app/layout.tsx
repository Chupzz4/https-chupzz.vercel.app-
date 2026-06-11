import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Tech VA & AI Automation Specialist",
  description:
    "Technical Virtual Assistant portfolio for AI automation, website development, funnels, lead generation, CRM automation, n8n integrations, and appointment setting systems.",
  keywords: [
    "Technical Virtual Assistant",
    "AI Automation Specialist",
    "n8n Integrations",
    "GoHighLevel Funnels",
    "CRM Automation",
    "Lead Generation"
  ],
  openGraph: {
    title: "Premium Tech VA & AI Automation Specialist",
    description:
      "Websites, funnels, and AI automation systems that help businesses save time, generate more leads, and improve conversions.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
