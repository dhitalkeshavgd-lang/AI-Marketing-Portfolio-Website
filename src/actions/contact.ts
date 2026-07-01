"use server";

import fs from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

async function storeMessage(payload: ContactPayload) {
  const storageDir = path.join(process.cwd(), "storage");
  const filePath = path.join(storageDir, "messages.json");
  await fs.mkdir(storageDir, { recursive: true });

  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await fs.readFile(filePath, "utf8")) as unknown[];
  } catch {
    existing = [];
  }

  existing.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  });

  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}

async function sendNotification(payload: ContactPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, RESEND_API_KEY } = process.env;

  if (RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "Altter Keshav <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL ?? "altterkeshav@gmail.com"],
        subject: `New consultation request from ${payload.name}`,
        text: `${payload.name}\n${payload.email}\n${payload.phone}\n${payload.company ?? ""}\n${payload.service}\n${payload.budget}\n\n${payload.message}`,
      }),
    });
    return;
  }

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL ?? SMTP_USER,
    to: CONTACT_TO_EMAIL ?? "altterkeshav@gmail.com",
    replyTo: payload.email,
    subject: `New consultation request from ${payload.name}`,
    text: `${payload.name}\n${payload.email}\n${payload.phone}\n${payload.company ?? ""}\n${payload.service}\n${payload.budget}\n\n${payload.message}`,
  });
}

export async function submitContactForm(payload: ContactPayload) {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, message: "Please check the form and try again." };
  }

  await storeMessage(parsed.data);
  await sendNotification(parsed.data);

  return { ok: true, message: "Thank you. Your consultation request has been received." };
}
