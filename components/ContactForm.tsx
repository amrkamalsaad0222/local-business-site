"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactForm } from "@/lib/contactSchema";

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  function onSubmit(data: ContactForm) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          {...register("name")}
          placeholder="الاسم"
          className="w-full rounded-lg bg-white/10 p-3"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="رسالتك"
          rows={4}
          className="w-full rounded-lg bg-white/10 p-3"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="rounded-lg bg-primary p-3 font-bold">
        إرسال
      </button>
    </form>
  );
}
