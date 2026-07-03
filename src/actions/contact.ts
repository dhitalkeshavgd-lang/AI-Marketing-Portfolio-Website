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
  const toEmail = CONTACT_TO_EMAIL ?? "info@altterkeshav.com";

  if (RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "Altter Keshav <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New consultation request from ${payload.name}`,
        text: `${payload.name}\n${payload.email}\n${payload.phone}\n${payload.company ?? ""}\n${payload.service}\n${payload.budget}\n\n${payload.message}`,
      }),
    });
    return;
  }

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        company: payload.company ?? "Not provided",
        service: payload.service,
        budget: payload.budget,
        message: payload.message,
        _replyto: payload.email,
        _subject: `New consultation request from ${payload.name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const formSubmitResult = await formSubmitResponse.json().catch(() => null);

    if (!formSubmitResponse.ok) {
      const message =
        formSubmitResult && typeof formSubmitResult === "object" && "message" in formSubmitResult
          ? String(formSubmitResult.message)
          : "FormSubmit email delivery failed.";
      throw new Error(message);
    }

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
    to: toEmail,
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

  try {
    await sendNotification(parsed.data);
  } catch (error) {
    const message =
      error instanceof Error && error.message
        ? error.message
        : "Email delivery failed.";
    return {
      ok: false,
      message: `Your message was saved locally, but email delivery did not complete: ${message}`,
    };
  }

  return { ok: true, message: "Thank you. Your consultation request has been received." };
}
