import {
  Bot,
  BrainCircuit,
  CalendarCheck,
  CircleCheckBig,
  Cpu,
  Crosshair,
  DatabaseZap,
  Filter,
  Gauge,
  Globe2,
  Headset,
  Inbox,
  LineChart,
  Radar,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Split,
  Workflow,
  type LucideIcon
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" }
];

/* ---- Hero ------------------------------------------------------------- */

export const heroStats = [
  { value: "24/7", label: "Systems running unattended" },
  { value: "<5m", label: "Median lead response time" },
  { value: "8+ hrs", label: "Admin reclaimed per week" }
];

/* ---- Trusted by / integrations belt ------------------------------------ */

export const integrations = [
  "Clay",
  "N8N",
  "GoHighLevel",
  "Salesforce",
  "Supabase",
  "Apollo",
  "Smartlead",
  "Heyreach",
  "Zapier",
  "Calendly",
  "Claude",
  "Chat GPT",
  "ClickUp",
  "Webflow",
  "Relume",
  "Lovable",
  "Otter AI",
  "Ring Central",
  "Github",
  "VS code",
  "Spline"
];

// Filenames carry spaces and inconsistent casing, and the display name is
// rarely the filename, so both mappings stay explicit rather than derived.
export const integrationLogo = (name: string) => "/images/" + encodeURIComponent(name) + ".png";

export const integrationLabels: Record<string, string> = {
  N8N: "n8n",
  "Chat GPT": "ChatGPT",
  "Otter AI": "Otter.ai",
  "Ring Central": "RingCentral",
  "VS code": "VS Code",
  Github: "GitHub",
  Heyreach: "HeyReach"
};

/* ---- Operator / about -------------------------------------------------- */

export const operatorCredentials = [
  { icon: Crosshair, label: "GTM Engineering", detail: "Clay-native data pipelines" },
  { icon: Workflow, label: "Automation Architecture", detail: "n8n, Make, native APIs" },
  { icon: DatabaseZap, label: "Revenue Operations", detail: "CRM design and hygiene" },
  { icon: Globe2, label: "Conversion Assets", detail: "Sites, funnels, landing systems" }
];

/* ---- Services ---------------------------------------------------------- */

type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
  points: string[];
  featured?: boolean;
  toolLogo?: { src: string; name: string };
};

export const services: Service[] = [
  {
    icon: Crosshair,
    title: "GTM Engineering",
    copy:
      "Clay becomes the data engine of your go-to-market. ICP list building, waterfall enrichment, AI research agents, intent and hiring signals, and lead scoring feed straight into your CRM, sequencer, and workflows, so sales works the right accounts at the right time.",
    points: ["Waterfall enrichment", "AI research agents", "Intent and hiring signals", "Scored, routed handoff"],
    featured: true,
    toolLogo: { src: "/images/Clay.png", name: "Clay" }
  },
  {
    icon: Bot,
    title: "AI Automation",
    copy:
      "Intake, routing, summarisation, follow-up, and support flows that run without supervision and escalate to a human at exactly the right moment.",
    points: ["Lead intake and routing", "Conversation summaries", "Escalation rules"]
  },
  {
    icon: Globe2,
    title: "Website Development",
    copy:
      "Conversion-focused sites with considered UX, genuine performance, and a presence that matches the price of what you sell.",
    points: ["Design to deployment", "Core Web Vitals", "CMS and analytics"]
  },
  {
    icon: Filter,
    title: "Funnel Systems",
    copy:
      "Landing pages, opt-ins, schedulers, and nurture sequences engineered as one path from first click to booked call.",
    points: ["Offer architecture", "Scheduler integration", "Nurture sequencing"]
  },
  {
    icon: DatabaseZap,
    title: "CRM Architecture",
    copy:
      "Pipelines, stages, tags, automations, and reporting foundations your team can still trust six months from now.",
    points: ["Pipeline design", "Automation layer", "Reporting foundations"]
  },
  {
    icon: SearchCheck,
    title: "Lead Generation",
    copy:
      "Prospecting workflows, lead magnets, and capture automations that keep qualified opportunities entering the pipeline.",
    points: ["Outbound workflows", "Capture automations", "Qualification logic"]
  },
  {
    icon: Headset,
    title: "Embedded Technical Support",
    copy:
      "Ongoing execution for operators who need a dependable technical partner across systems, launches, and day-to-day workflows.",
    points: ["Retained execution", "Systems maintenance", "Launch support"]
  }
];

/* ---- Automation flow visualisation ------------------------------------- */

export const flowStages = [
  {
    key: "capture",
    icon: Inbox,
    stage: "Trigger",
    title: "Signal captured",
    copy: "Form, ad, inbound reply, or intent signal lands and is timestamped.",
    meta: "0s"
  },
  {
    key: "enrich",
    icon: Radar,
    stage: "Enrich",
    title: "Context assembled",
    copy: "Waterfall enrichment appends firmographics, tech stack, and hiring signals.",
    meta: "~12s"
  },
  {
    key: "reason",
    icon: BrainCircuit,
    stage: "Reason",
    title: "AI qualifies and scores",
    copy: "An agent researches the account, writes the summary, and assigns a fit score.",
    meta: "~40s"
  },
  {
    key: "route",
    icon: Split,
    stage: "Route",
    title: "Owner assigned",
    copy: "Scored records drop into the right pipeline stage with the right owner.",
    meta: "~45s"
  },
  {
    key: "engage",
    icon: Send,
    stage: "Engage",
    title: "Personalised outreach",
    copy: "Sequenced email, SMS, and task triggers fire with the research already attached.",
    meta: "<5m"
  },
  {
    key: "close",
    icon: CircleCheckBig,
    stage: "Complete",
    title: "Logged and reported",
    copy: "Every touch writes back to the CRM and into the weekly performance view.",
    meta: "Continuous"
  }
];

export const flowTelemetry = [
  { label: "Records processed", value: "12,480", delta: "+18%" },
  { label: "Avg. response", value: "4m 12s", delta: "-63%" },
  { label: "Routing accuracy", value: "97.4%", delta: "+6%" }
];

/* ---- Results ----------------------------------------------------------- */

export const metrics = [
  {
    icon: Gauge,
    value: "8+",
    unit: "hrs",
    label: "Admin hours reclaimed weekly",
    copy: "Manual intake, data entry, and follow-up chasing handed over to the system."
  },
  {
    icon: LineChart,
    value: "2.1",
    unit: "x",
    label: "Faster follow-up speed",
    copy: "Leads answered while intent is still live instead of the next morning."
  },
  {
    icon: Sparkles,
    value: "42",
    unit: "%",
    label: "Lift in qualified inquiries",
    copy: "Clearer offers, sharper conversion paths, fewer dead ends in the funnel."
  },
  {
    icon: ShieldCheck,
    value: "97",
    unit: "%",
    label: "Routing accuracy",
    copy: "The right record reaches the right owner at the right stage, every time."
  }
];

/* ---- Case studies ------------------------------------------------------ */

/**
 * Every entry carries `images` as an array so the card has one code path. A
 * single-image entry renders a still; more than one renders a slider inside the
 * card. The Websites entry collects the individual site builds that would
 * otherwise each need their own near-identical card.
 */
export const caseStudies = [
  {
    type: "Website",
    title: "Websites",
    copy:
      "Conversion-focused service sites across automotive, contracting, virtual tours, and home renovation — each with quote capture, credibility proof, and CRM-ready enquiry routing.",
    metric: "4 builds shipped",
    tags: ["Web", "Lead capture"],
    images: [
      "/images/automotive-website.png",
      "/images/construction-website.png",
      "/images/virtual-tour-website.png",
      "/images/renovation-website.png"
    ]
  },
  {
    type: "Lead Capture Build",
    title: "Roofing Website",
    copy:
      "Storm-damage landing pages, estimate funnels, automated follow-up, and segmented pipeline stages behind every submission.",
    metric: "2.1x follow-up speed",
    tags: ["Funnel", "Automation"],
    images: ["/images/roofing-website.png"]
  },
  {
    type: "Contractor Brand System",
    title: "Contractor Website",
    copy:
      "Project gallery, quote request flow, credibility proof, and appointment scheduling wired directly to CRM tasks.",
    metric: "35% more quote starts",
    tags: ["Web", "Scheduling"],
    images: ["/images/contractor-website.png"]
  },
  {
    type: "Offer Funnel",
    title: "Funnel System",
    copy:
      "Opt-in page, scheduler, nurture sequence, retargeting hooks, and analytics-ready conversion events end to end.",
    metric: "Lower lead leakage",
    tags: ["Funnel", "Analytics"],
    images: ["/images/funnel-system.png"]
  },
  {
    type: "Operations Automation",
    title: "AI Automation Suite",
    copy:
      "n8n workflows for enrichment, AI summaries, internal alerts, deal updates, and drafted responses across the pipeline.",
    metric: "8+ hours saved weekly",
    tags: ["n8n", "AI agents"],
    images: ["/images/ai-automation.png"]
  }
];

/* ---- AI agents --------------------------------------------------------- */

export const agents = [
  {
    icon: Radar,
    name: "Research Agent",
    role: "Account intelligence",
    copy: "Reads the site, funding, headcount, and tech stack, then writes a briefing before anyone touches the account.",
    status: "Active"
  },
  {
    icon: Filter,
    name: "Qualification Agent",
    role: "Fit scoring",
    copy: "Scores inbound against your ICP rules, tags the record, and suppresses everything that fails the bar.",
    status: "Active"
  },
  {
    icon: Send,
    name: "Outreach Agent",
    role: "Personalised sequencing",
    copy: "Drafts opening lines from real signals rather than merge tags, and hands finished copy to the sequencer.",
    status: "Active"
  },
  {
    icon: Inbox,
    name: "Inbox Agent",
    role: "Reply triage",
    copy: "Classifies every reply, books the meeting, updates the stage, and escalates anything ambiguous to a human.",
    status: "Active"
  },
  {
    icon: Cpu,
    name: "Operations Agent",
    role: "Internal workflow",
    copy: "Creates tasks, posts alerts, syncs records between tools, and keeps the CRM free of silent drift.",
    status: "Active"
  },
  {
    icon: CalendarCheck,
    name: "Scheduling Agent",
    role: "Booking and reminders",
    copy: "Handles booking links, confirmations, reminders, and no-show recovery without a person in the loop.",
    status: "Active"
  }
];

/* ---- Process ----------------------------------------------------------- */

export const process = [
  {
    step: "01",
    title: "Discovery",
    copy: "We map the offer, the current stack, the bottlenecks, and the lead sources worth automating first.",
    deliverable: "Systems audit"
  },
  {
    step: "02",
    title: "Strategy",
    copy: "You get a build plan covering the site, funnel, CRM, workflows, integrations, and the full conversion path.",
    deliverable: "Build blueprint"
  },
  {
    step: "03",
    title: "Build",
    copy: "I implement the assets and automations, connect the tools, and QA every customer-facing touchpoint.",
    deliverable: "Live system"
  },
  {
    step: "04",
    title: "Launch",
    copy: "We test, refine, document the system, and hand it over so your team can operate it with confidence.",
    deliverable: "Documented handoff"
  }
];

/* ---- Testimonials ------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "The website and automation flow made our follow-up feel instant. Leads no longer sit untouched, and the team knows exactly what to do next.",
    name: "Rich Sambora",
    role: "Owner, Home Services"
  },
  {
    quote:
      "Our funnel, CRM, and appointment workflow finally work together. It feels like we upgraded the entire backend of the business.",
    name: "Scott Hill",
    role: "Founder, B2B Services"
  },
  {
    quote:
      "Fast, organised, and genuinely technical. The automations saved our admin team time within the first week.",
    name: "Lian Back",
    role: "CEO, Local Contractor"
  }
];

/* ---- Social profiles --------------------------------------------------- */

/**
 * Filled brand glyphs on a 24x24 viewBox rather than lucide icons: lucide has
 * no TikTok mark at all, and its brand icons are outline-style, so three
 * outlines beside one filled glyph would not read as a set. These also feed
 * the `sameAs` block in the Person schema.
 */
export const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/christiancapistrano14",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chupz04/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@chupzz_4",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@chupzz4514",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  }
];
