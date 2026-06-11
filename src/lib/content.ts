import {
  Bot,
  CalendarCheck,
  ChartNoAxesCombined,
  Code2,
  DatabaseZap,
  FileStack,
  Filter,
  Globe2,
  Headset,
  MessageSquareMore,
  Network,
  Rocket,
  SearchCheck,
  Settings2,
  Sparkles,
  TimerReset,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = ["Services", "Process", "Work", "Results"];

export const services = [
  {
    icon: Globe2,
    title: "Website Development",
    copy: "Conversion-focused websites built with polished UX, fast performance, and a premium business presence."
  },
  {
    icon: Filter,
    title: "Sales Funnel Building",
    copy: "Landing pages, opt-ins, thank-you pages, and nurture flows designed to move prospects from click to booked call."
  },
  {
    icon: Bot,
    title: "AI Automation",
    copy: "AI-assisted systems for intake, lead routing, summaries, follow-ups, task creation, and customer support workflows."
  },
  {
    icon: SearchCheck,
    title: "Lead Generation",
    copy: "Prospecting workflows, lead magnets, forms, and automations that keep new opportunities entering your pipeline."
  },
  {
    icon: DatabaseZap,
    title: "CRM Setup",
    copy: "Clean CRM architecture, pipelines, tags, snapshots, automations, and reporting foundations that teams can trust."
  },
  {
    icon: Headset,
    title: "Virtual Assistant Support",
    copy: "Technical execution for busy operators who need reliable support across systems, updates, workflows, and launches."
  }
];

export const benefits = [
  { icon: TimerReset, title: "Save Time", copy: "Replace repetitive admin with systems that run in the background." },
  { icon: ChartNoAxesCombined, title: "More Leads", copy: "Capture, qualify, and route more prospects without losing momentum." },
  { icon: Workflow, title: "Automation", copy: "Connect websites, funnels, CRMs, inboxes, calendars, and AI tools." },
  { icon: MessageSquareMore, title: "Better Follow-Ups", copy: "Keep every lead warm with timely SMS, email, and task triggers." },
  { icon: Sparkles, title: "Professional Presence", copy: "Launch digital assets that look premium and build trust quickly." },
  { icon: Rocket, title: "Scalable Systems", copy: "Build operational foundations that can grow with your offers and team." }
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    copy: "We map your offer, current tech stack, bottlenecks, lead sources, and the highest-value automation opportunities."
  },
  {
    step: "02",
    title: "Strategy",
    copy: "You get a practical build plan for the website, funnel, CRM, workflows, integrations, and conversion path."
  },
  {
    step: "03",
    title: "Build",
    copy: "I implement the assets and automations, connect tools like n8n and GoHighLevel, and QA every customer touchpoint."
  },
  {
    step: "04",
    title: "Launch",
    copy: "We test, refine, document the system, and launch with a clean handoff so your team can operate confidently."
  }
];

export const portfolio = [
  {
    type: "Local Service Website",
    title: "Plumbing Website",
    copy: "A premium service site with emergency-call CTAs, lead forms, trust sections, and CRM-ready inquiry routing.",
    metric: "+42% inquiry intent",
    accent: "cyan",
    image: "/images/plumbing-website.png"
  },
  {
    type: "Lead Capture Build",
    title: "Roofing Website",
    copy: "Storm-damage landing pages, estimate funnels, automated follow-ups, and segmented pipeline stages.",
    metric: "2.1x follow-up speed",
    accent: "blue",
    image: "/images/roofing-website.png"
  },
  {
    type: "Contractor Brand System",
    title: "Contractor Website",
    copy: "Project gallery, quote request flow, credibility proof, and appointment scheduling connected to CRM tasks.",
    metric: "35% more quote starts",
    accent: "emerald",
    image: "/images/contractor-website.png"
  },
  {
    type: "Offer Funnel",
    title: "Funnel System",
    copy: "Opt-in page, scheduler, nurture sequence, retargeting hooks, and analytics-ready conversion events.",
    metric: "Lower lead leakage",
    accent: "violet",
    image: "/images/funnel-system.png"
  },
  {
    type: "Operations Automation",
    title: "AI Automation",
    copy: "n8n workflows for lead enrichment, AI summaries, internal alerts, deal updates, and response drafting.",
    metric: "8+ hours saved weekly",
    accent: "cyan",
    image: "/images/ai-automation.png"
  }
];

export const testimonials = [
  {
    quote:
      "The website and automation flow made our follow-up feel instant. Leads no longer sit untouched, and our team knows exactly what to do next.",
    name: "Service Business Owner",
    role: "Home Services"
  },
  {
    quote:
      "Our funnel, CRM, and appointment workflow finally work together. It feels like we upgraded the whole backend of the business.",
    name: "Growth Consultant",
    role: "B2B Services"
  },
  {
    quote:
      "Fast, organized, and very technical. The automations saved our admin team time within the first week.",
    name: "Operations Lead",
    role: "Local Contractor"
  }
];

export const stackTags = [
  "n8n",
  "GoHighLevel",
  "Zapier",
  "CRM Pipelines",
  "AI Agents",
  "Lead Routing",
  "Appointment Systems",
  "Funnels"
];

export const heroStats = [
  { label: "Automation-first builds", value: "24/7" },
  { label: "Lead response systems", value: "<5m" },
  { label: "Connected workflows", value: "AI+" }
];

export const techSignals = [
  { icon: Network, label: "Workflow Maps" },
  { icon: Code2, label: "Web Systems" },
  { icon: CalendarCheck, label: "Booking Flows" },
  { icon: FileStack, label: "Funnel Assets" },
  { icon: Settings2, label: "CRM Logic" },
  { icon: Zap, label: "Automation Ops" }
];
