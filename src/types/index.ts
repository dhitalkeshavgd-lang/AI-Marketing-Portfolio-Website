import type { LucideIcon } from "lucide-react";

export type IconName =
  | "BrainCircuit"
  | "Bot"
  | "ChartNoAxesCombined"
  | "Cpu"
  | "FileText"
  | "Gauge"
  | "MailCheck"
  | "Megaphone"
  | "MessagesSquare"
  | "SearchCheck"
  | "Settings2"
  | "Workflow";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  short: string;
  description: string;
  benefits: string[];
  problems: string[];
  process: string[];
  timeline: string;
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  cover: string;
  content: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  category: string;
  result: string;
  description: string;
  challenge: string;
  solution: string;
  duration: string;
  tools: string[];
  metrics: string[];
  serviceSlug: string;
};

export type LucideMap = Record<IconName, LucideIcon>;
