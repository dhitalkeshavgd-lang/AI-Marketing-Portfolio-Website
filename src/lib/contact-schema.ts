import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter a valid phone number."),
  company: z.string().optional(),
  service: z.string().min(2, "Select a service."),
  budget: z.string().min(2, "Select a budget range."),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

export type ContactPayload = z.infer<typeof contactSchema>;
