# Altter Keshav Portfolio Website

Premium AI marketing portfolio website built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, shadcn-style UI primitives, React Hook Form, Zod, Nodemailer, and optional Resend support.

## Features

- Fully responsive light-theme portfolio
- Home, About, Services, individual service pages, Blog, blog detail pages, Contact, Privacy, and Terms
- Case studies with measurable outcomes
- Framer Motion animations and premium AI-inspired visuals
- Contact form with React Hook Form and Zod validation
- Next.js Server Action and `/api/contact` endpoint
- Local message storage in `storage/messages.json`
- Nodemailer SMTP notifications and optional Resend integration
- SEO metadata, dynamic sitemap, robots file, canonical URLs, OpenGraph, and Twitter cards
- Vercel-ready project structure

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` for production email delivery:

```bash
NEXT_PUBLIC_SITE_URL=https://altterkeshav.com
CONTACT_TO_EMAIL=altterkeshav@gmail.com

# SMTP via Nodemailer
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-password
SMTP_FROM_EMAIL=Altter Keshav <altterkeshav@gmail.com>

# Optional Resend alternative
RESEND_API_KEY=your-resend-key
RESEND_FROM_EMAIL=Altter Keshav <onboarding@resend.dev>
```

If email variables are not set, the contact form still validates and stores submissions locally.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
