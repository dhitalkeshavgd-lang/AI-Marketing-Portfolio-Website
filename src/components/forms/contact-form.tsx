"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, Input, SelectField, Textarea } from "@/components/ui/fields";
import { submitContactForm } from "@/actions/contact";
import { services } from "@/data/site";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

const budgets = [
  "Under Rs. 1,00,000",
  "Rs. 1,00,000 - Rs. 3,00,000",
  "Rs. 3,00,000 - Rs. 7,50,000",
  "Rs. 7,50,000+",
];

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

    reset();
    setError("root", { type: "success", message: result.message });
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
