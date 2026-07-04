import type { BlogPost, CaseStudy, Service } from "@/types";

export const contactInfo = {
  name: "Altter Keshav",
  title: "AI Marketing Expert & Consultant",
  email: "info@altterkeshav.com",
  phone: "9851121734",
  location: "Gyaneshwor-30, Kathmandu",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/altterkeshav/30min";

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    icon: "BrainCircuit",
    short: "A practical roadmap for using AI across acquisition, retention, and revenue.",
    description:
      "Build a focused AI marketing strategy that connects automation, content, data, and customer experience into one growth system.",
    benefits: ["Clear AI roadmap", "Campaign prioritization", "Better funnel visibility", "Faster growth experiments"],
    problems: ["Unclear AI use cases", "Manual campaign planning", "Fragmented tools", "Slow decision cycles"],
    process: ["Audit current marketing", "Map customer journeys", "Prioritize AI opportunities", "Launch a 90-day execution plan"],
    timeline: "2 to 4 weeks",
    faqs: [
      { question: "Do I need existing AI tools?", answer: "No. The strategy starts with your current stack and recommends only useful additions." },
      { question: "Is this for small businesses?", answer: "Yes. The roadmap is scoped to your budget, team size, and immediate revenue goals." },
    ],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    icon: "Workflow",
    short: "Automate repetitive marketing workflows without losing the human touch.",
    description:
      "Design reliable automation for lead capture, nurturing, segmentation, reporting, and follow-up across your marketing stack.",
    benefits: ["Lower manual workload", "Consistent follow-up", "Improved conversion rates", "Cleaner reporting"],
    problems: ["Missed leads", "Manual CRM updates", "Disconnected email journeys", "Delayed reporting"],
    process: ["Document workflows", "Design automation logic", "Connect tools", "Test and optimize"],
    timeline: "3 to 6 weeks",
    faqs: [
      { question: "Can you work with my current CRM?", answer: "Yes. The implementation is designed around your existing CRM where possible." },
      { question: "Will automation sound robotic?", answer: "No. Messaging is written with brand voice, timing, and intent in mind." },
    ],
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    icon: "Bot",
    short: "AI assistants that qualify leads, answer questions, and route customers quickly.",
    description:
      "Launch helpful AI chatbots for websites, landing pages, and internal teams with clear escalation paths and measurable goals.",
    benefits: ["24/7 response coverage", "Lead qualification", "Lower support load", "Better customer experience"],
    problems: ["Slow response times", "Repeated questions", "Unqualified inquiries", "Support bottlenecks"],
    process: ["Define use cases", "Write conversation flows", "Train knowledge base", "Deploy and monitor"],
    timeline: "2 to 5 weeks",
    faqs: [
      { question: "Can the chatbot book consultations?", answer: "Yes. It can route users to your form or calendar workflow." },
      { question: "Can it hand off to humans?", answer: "Yes. Escalation rules are part of the setup." },
    ],
  },
  {
    slug: "ai-lead-generation",
    title: "AI Lead Generation",
    icon: "ChartNoAxesCombined",
    short: "Use AI to find, qualify, and nurture high-fit prospects.",
    description:
      "Create AI-assisted lead generation systems for targeting, outreach, enrichment, scoring, and conversion tracking.",
    benefits: ["Better prospect targeting", "Higher-quality leads", "Faster outreach", "Measurable pipeline lift"],
    problems: ["Low-quality leads", "Manual prospecting", "Weak follow-up", "Unclear attribution"],
    process: ["Define ICP", "Build lead sources", "Automate qualification", "Optimize outreach sequences"],
    timeline: "3 to 7 weeks",
    faqs: [
      { question: "Do you provide lead lists?", answer: "The system can include lead sourcing, enrichment, and qualification workflows." },
      { question: "Is outreach compliant?", answer: "Processes are designed with consent, relevance, and opt-out handling in mind." },
    ],
  },
  {
    slug: "content-automation",
    title: "Content Automation",
    icon: "FileText",
    short: "Scale useful content production with AI workflows and editorial control.",
    description:
      "Build content systems for research, outlines, repurposing, scheduling, and quality checks while preserving brand voice.",
    benefits: ["More consistent publishing", "Faster research", "Reusable content workflows", "Brand-safe AI output"],
    problems: ["Inconsistent content", "Slow production", "No repurposing system", "Generic AI copy"],
    process: ["Define content pillars", "Create AI prompts", "Build review workflow", "Measure content performance"],
    timeline: "2 to 4 weeks",
    faqs: [
      { question: "Will content be fully automated?", answer: "The best setup combines AI speed with human review for quality and trust." },
      { question: "Can this support SEO?", answer: "Yes. Research, structure, internal linking, and briefs can be included." },
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    icon: "Cpu",
    short: "Senior guidance for selecting, deploying, and improving AI marketing systems.",
    description:
      "Get strategic support for AI adoption, vendor selection, prompt systems, team training, and growth operations.",
    benefits: ["Clear implementation advice", "Tool selection support", "Team enablement", "Reduced adoption risk"],
    problems: ["Tool overload", "No internal AI process", "Poor prompt quality", "Slow adoption"],
    process: ["Discover goals", "Assess stack", "Recommend systems", "Train and iterate"],
    timeline: "Ongoing or project-based",
    faqs: [
      { question: "Can consulting be monthly?", answer: "Yes. Advisory support can be structured as monthly growth and AI operations sessions." },
      { question: "Do you train teams?", answer: "Yes. Training can cover prompts, workflows, analytics, and responsible AI use." },
    ],
  },
  {
    slug: "seo-ai-optimization",
    title: "SEO + AI Optimization",
    icon: "SearchCheck",
    short: "Improve organic visibility using AI-assisted research and optimization.",
    description: "Blend technical SEO, content strategy, and AI-assisted workflows to grow organic demand efficiently.",
    benefits: ["Better keyword mapping", "Optimized content briefs", "Improved search visibility", "Scalable SEO workflows"],
    problems: ["Thin content", "Poor rankings", "Slow SEO research", "Unclear content gaps"],
    process: ["SEO audit", "Opportunity mapping", "AI content workflow", "Optimization and reporting"],
    timeline: "4 to 8 weeks",
    faqs: [{ question: "Is AI content safe for SEO?", answer: "Yes when it is useful, reviewed, original, and aligned with search intent." }],
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    icon: "MailCheck",
    short: "Build email journeys that nurture leads and retain customers.",
    description: "Create segmented lifecycle email flows for acquisition, onboarding, retention, and reactivation.",
    benefits: ["Higher engagement", "Better segmentation", "Automated nurture", "Revenue recovery"],
    problems: ["Generic newsletters", "No nurture flow", "Low open rates", "Manual follow-up"],
    process: ["Segment audience", "Write flows", "Automate triggers", "Measure and improve"],
    timeline: "2 to 5 weeks",
    faqs: [{ question: "Can you write the emails?", answer: "Yes. Copywriting and automation setup can be delivered together." }],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    icon: "Settings2",
    short: "Keep your CRM clean, current, and useful for sales decisions.",
    description: "Automate CRM updates, lead scoring, pipeline movement, and reporting for a more reliable sales process.",
    benefits: ["Cleaner data", "Faster sales handoff", "Better pipeline insight", "Less admin work"],
    problems: ["Messy records", "Manual updates", "Lost opportunities", "No lead scoring"],
    process: ["Audit CRM", "Define stages", "Automate data movement", "Build dashboards"],
    timeline: "3 to 6 weeks",
    faqs: [{ question: "Which CRMs do you support?", answer: "Most common CRMs can be supported through native integrations or automation platforms." }],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "Gauge",
    short: "Connect tools and remove repetitive operational work.",
    description: "Design practical automations across marketing, sales, support, and reporting systems.",
    benefits: ["Reduced busywork", "Faster operations", "Fewer errors", "Clear handoffs"],
    problems: ["Tool switching", "Manual reports", "Process delays", "Inconsistent handoffs"],
    process: ["Map operations", "Identify automation wins", "Build workflows", "Monitor reliability"],
    timeline: "2 to 6 weeks",
    faqs: [{ question: "Can this connect multiple tools?", answer: "Yes. Workflows can connect forms, CRM, email, sheets, ads, and reporting tools." }],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-estate-ai-lead-generation",
    title: "AI Lead Generation for a Real Estate Company",
    industry: "Real Estate",
    category: "Lead Generation",
    result: "3.2x more qualified buyer inquiries in 60 days",
    description:
      "A Kathmandu property team needed fewer cold inquiries and more ready-to-visit buyers from website and social traffic.",
    challenge:
      "The sales team was receiving scattered inquiries from Facebook, Google forms, and website chat, but had no qualification process or response-time discipline.",
    solution:
      "Built an AI-assisted lead capture system with intent scoring, automated CRM routing, scripted follow-up messages, and a chatbot that qualified budget, location, and purchase timeline before handoff.",
    duration: "8 weeks",
    tools: ["Chatbot", "CRM Automation", "Lead Scoring", "Meta Ads", "Google Sheets"],
    metrics: ["3.2x qualified inquiries", "42% lower response time", "31% lift in booked viewings", "18 hours saved weekly"],
    serviceSlug: "ai-lead-generation",
  },
  {
    slug: "ecommerce-lifecycle-automation",
    title: "Marketing Automation for an E-commerce Brand",
    industry: "E-commerce",
    category: "Automation",
    result: "27% revenue recovery from lifecycle email flows",
    description:
      "A growing online store wanted to recover abandoned carts and convert one-time buyers into repeat customers.",
    challenge:
      "Campaigns were sent manually, every customer received the same message, and the team had no lifecycle automation for cart recovery, post-purchase education, or winback.",
    solution:
      "Designed segmented email and SMS flows, AI-assisted product recommendations, retention dashboards, and weekly optimization rituals for offer testing and customer cohorts.",
    duration: "6 weeks",
    tools: ["Email Automation", "Customer Segments", "AI Copy System", "Analytics Dashboard"],
    metrics: ["27% recovered revenue", "19% higher repeat purchases", "34% better email CTR", "8 automated flows launched"],
    serviceSlug: "marketing-automation",
  },
  {
    slug: "saas-content-automation-engine",
    title: "Content Automation for a B2B SaaS Team",
    industry: "SaaS",
    category: "Content Automation",
    result: "4x faster content production without lowering quality",
    description:
      "A lean SaaS marketing team needed a consistent content engine without hiring a full editorial department.",
    challenge:
      "The team had strong expertise but inconsistent publishing, slow research, and no repeatable way to turn product knowledge into SEO articles, LinkedIn posts, and nurture content.",
    solution:
      "Created an AI-assisted editorial workflow for research, briefs, outlines, subject-matter interviews, repurposing, and quality checks with brand voice prompts and approval stages.",
    duration: "5 weeks",
    tools: ["SEO Briefs", "Prompt Library", "Content Calendar", "Notion Workflow", "Analytics"],
    metrics: ["4x faster production", "24 SEO briefs created", "65% lower drafting time", "12-week content calendar shipped"],
    serviceSlug: "content-automation",
  },
  {
    slug: "service-business-chatbot",
    title: "AI Chatbot for a Service Business",
    industry: "Professional services",
    category: "Chatbot",
    result: "58% of website questions answered instantly",
    description:
      "A consulting business needed to answer repetitive visitor questions and route high-intent prospects to booking faster.",
    challenge:
      "Visitors had common questions about pricing, services, and process, but the founder could not respond instantly during peak inquiry hours.",
    solution:
      "Deployed a website AI assistant trained on service pages, FAQs, booking rules, and escalation logic, then connected qualified conversations to the contact workflow.",
    duration: "4 weeks",
    tools: ["AI Chatbot", "Knowledge Base", "FAQ Design", "Contact Routing"],
    metrics: ["58% instant answers", "21% more form submissions", "24/7 visitor support", "Clear human escalation path"],
    serviceSlug: "chatbot-development",
  },
  {
    slug: "ai-seo-growth-system",
    title: "AI SEO Growth System for a Local Education Brand",
    industry: "Education",
    category: "SEO + AI",
    result: "146% organic traffic growth in 90 days",
    description:
      "A local education provider wanted to rank for high-intent course searches and convert organic visitors into consultation requests.",
    challenge:
      "The website had thin service pages, no keyword clusters, inconsistent internal linking, and slow content production.",
    solution:
      "Built an AI-assisted SEO system with topic clusters, search-intent briefs, technical cleanup priorities, internal-link maps, and conversion-focused landing page improvements.",
    duration: "12 weeks",
    tools: ["SEO Audit", "AI Briefs", "Landing Pages", "Search Console", "Conversion Tracking"],
    metrics: ["146% organic growth", "38% more consultation clicks", "31 new ranking pages", "22% lower content cost"],
    serviceSlug: "seo-ai-optimization",
  },
];

export const testimonials = [
  {
    quote:
      "Altter helped us turn scattered AI ideas into a practical growth system. The automation work paid for itself quickly.",
    name: "Ritika Sharma",
    role: "Founder, UrbanNest Realty",
  },
  {
    quote:
      "The strategy was clear, premium, and measurable. Our team finally knows how to use AI without adding complexity.",
    name: "Aarav Thapa",
    role: "Marketing Lead, Summit Commerce",
  },
  {
    quote:
      "We moved from manual follow-ups to a reliable lead engine. The implementation was fast and thoughtfully documented.",
    name: "Nisha Karki",
    role: "Director, GrowthWorks Nepal",
  },
  {
    quote:
      "The chatbot and follow-up system made our website feel alive. We stopped losing good prospects after office hours.",
    name: "Suman Adhikari",
    role: "Managing Partner, Advisory Studio",
  },
  {
    quote:
      "Altter's content automation process helped our experts publish consistently without sounding generic.",
    name: "Maya Gurung",
    role: "Head of Marketing, LearnSphere",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-marketing-systems-that-compound",
    title: "How AI Marketing Systems Compound Growth",
    excerpt:
      "A practical look at turning AI from a collection of tools into repeatable marketing systems.",
    date: "2026-06-12",
    readTime: "6 min read",
    category: "Strategy",
    tags: ["AI Marketing", "Automation", "Growth"],
    cover: "AI growth system",
    content: [
      "AI becomes valuable when it is connected to a clear business outcome. Instead of chasing tools, start with the customer journey and identify the bottlenecks that slow revenue.",
      "The strongest AI marketing systems combine data, messaging, workflows, and feedback loops. That means every campaign teaches the next one what to improve.",
      "For most teams, the first wins come from lead qualification, content operations, email lifecycle flows, and reporting automation.",
    ],
  },
  {
    slug: "lead-generation-with-ai",
    title: "AI Lead Generation: From Traffic to Qualified Pipeline",
    excerpt:
      "How to use AI for better targeting, faster qualification, and smarter follow-up.",
    date: "2026-05-28",
    readTime: "7 min read",
    category: "Lead Generation",
    tags: ["Leads", "CRM", "Chatbots"],
    cover: "AI lead pipeline",
    content: [
      "Lead generation improves when AI helps identify intent, enrich context, and route prospects based on fit.",
      "The goal is not more leads at any cost. The goal is more of the right leads with faster response times and clearer sales handoff.",
      "A good system tracks source, segment, urgency, and next action so the team can act quickly.",
    ],
  },
  {
    slug: "automation-without-losing-trust",
    title: "Marketing Automation Without Losing Trust",
    excerpt:
      "Automation should make your brand feel more responsive, not more robotic.",
    date: "2026-05-10",
    readTime: "5 min read",
    category: "Automation",
    tags: ["Email", "Customer Journey", "Trust"],
    cover: "Marketing automation",
    content: [
      "Trust is built through relevance, timing, and clarity. Automation should support those qualities instead of replacing them.",
      "Strong automation starts with segmentation and behavior-based triggers. Every message should feel like the logical next step.",
      "Review loops matter. Measure replies, conversions, unsubscribes, and support friction to keep improving.",
    ],
  },
  {
    slug: "chatbots-that-convert",
    title: "What Makes an AI Chatbot Convert Visitors?",
    excerpt:
      "A conversion-focused chatbot needs clear scope, strong answers, and a fast path to action.",
    date: "2026-04-22",
    readTime: "4 min read",
    category: "Chatbots",
    tags: ["Chatbot", "CRO", "Support"],
    cover: "AI chatbot conversion",
    content: [
      "The best chatbot is not the one that talks the most. It is the one that helps visitors make progress quickly.",
      "Start with the top questions, common objections, and the decisions a visitor needs to make before booking a consultation.",
      "Always include escalation paths, analytics, and routine knowledge-base updates.",
    ],
  },
];
