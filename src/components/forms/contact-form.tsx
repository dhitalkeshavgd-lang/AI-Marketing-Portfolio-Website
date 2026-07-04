"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, Input, SelectField, Textarea } from "@/components/ui/fields";
import { submitContactForm } from "@/actions/contact";
import { contactInfo, services } from "@/data/site";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

const budgets = [
  "Under Rs. 1,00,000",
  "Rs. 1,00,000 - Rs. 3,00,000",
  "Rs. 3,00,000 - Rs. 7,50,000",
  "Rs. 7,50,000+",
];

function submitToFormSubmit(values: ContactPayload) {
  const iframeName = "formsubmit-hidden-frame";
  let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${iframeName}"]`);

  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.className = "hidden";
    iframe.setAttribute("aria-hidden", "true");
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.action = `https://formsubmit.co/${contactInfo.email}`;
  form.method = "POST";
  form.target = iframeName;
  form.className = "hidden";

  const fields: Record<string, string> = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    company: values.company || "Not provided",
    service: values.service,
    budget: values.budget,
    message: values.message,
    _replyto: values.email,
    _subject: `New consultation request from ${values.name}`,
    _template: "table",
    _captcha: "false",
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "", budget: "" },
  });

  async function onSubmit(values: ContactPayload) {
    const result = await submitContactForm(values);
    if (!result.ok) {
      setError("root", { message: result.message });
      return;
    }

    submitToFormSubmit(values);
    reset();
    setError("root", {
      type: "success",
      message:
        "Thank you. Your lead has been saved and sent to info@altterkeshav.com. Please check inbox/spam and activate FormSubmit if it asks.",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.08)] sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input placeholder="you@company.com" type="email" {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <Input placeholder="9851121734" {...register("phone")} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <Input placeholder="Company name" {...register("company")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service" error={errors.service?.message}>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <SelectField
                value={field.value}
                onValueChange={field.onChange}
                placeholder="Select service"
                items={services.slice(0, 10).map((service) => service.title)}
              />
            )}
          />
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <SelectField value={field.value} onValueChange={field.onChange} placeholder="Select budget" items={budgets} />
            )}
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <Textarea placeholder="Tell me about your goals, current marketing stack, and timeline." {...register("message")} />
      </Field>
      {errors.root?.message ? (
        <p className={errors.root.type === "success" ? "text-sm font-semibold text-emerald-600" : "text-sm font-semibold text-red-600"}>
          {errors.root.message}
        </p>
      ) : null}
      <Button disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"} <Send className="size-4" />
      </Button>
    </form>
  );
}
