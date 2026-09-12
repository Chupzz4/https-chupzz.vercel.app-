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

export const caseStudies = [
  {
    type: "Local Service Website",
    title: "Plumbing Website",
    copy:
      "A premium service site with emergency-call CTAs, structured lead forms, trust sections, and CRM-ready inquiry routing.",
    metric: "+42% inquiry intent",
    tags: ["Web", "CRM routing"],
    image: "/images/plumbing-website.png"
  },
  {
    type: "Lead Capture Build",
    title: "Roofing Website",
    copy:
      "Storm-damage landing pages, estimate funnels, automated follow-up, and segmented pipeline stages behind every submission.",
    metric: "2.1x follow-up speed",
    tags: ["Funnel", "Automation"],
    image: "/images/roofing-website.png"
  },
  {
    type: "Contractor Brand System",
    title: "Contractor Website",
    copy:
      "Project gallery, quote request flow, credibility proof, and appointment scheduling wired directly to CRM tasks.",
    metric: "35% more quote starts",
    tags: ["Web", "Scheduling"],
    image: "/images/contractor-website.png"
  },
  {
    type: "Offer Funnel",
    title: "Funnel System",
    copy:
      "Opt-in page, scheduler, nurture sequence, retargeting hooks, and analytics-ready conversion events end to end.",
    metric: "Lower lead leakage",
    tags: ["Funnel", "Analytics"],
    image: "/images/funnel-system.png"
  },
  {
    type: "Operations Automation",
    title: "AI Automation Suite",
    copy:
      "n8n workflows for enrichment, AI summaries, internal alerts, deal updates, and drafted responses across the pipeline.",
    metric: "8+ hours saved weekly",
    tags: ["n8n", "AI agents"],
    image: "/images/ai-automation.png"
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
    name: "Service Business Owner",
    role: "Home Services"
  },
  {
    quote:
      "Our funnel, CRM, and appointment workflow finally work together. It feels like we upgraded the entire backend of the business.",
    name: "Growth Consultant",
    role: "B2B Services"
  },
  {
    quote:
      "Fast, organised, and genuinely technical. The automations saved our admin team time within the first week.",
    name: "Operations Lead",
    role: "Local Contractor"
  }
];
