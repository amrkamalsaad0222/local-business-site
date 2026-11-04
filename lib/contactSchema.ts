import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "الاسم قصير"),
  message: z.string().min(5, "الرسالة قصيرة"),
});

export type ContactForm = z.infer<typeof contactSchema>;
