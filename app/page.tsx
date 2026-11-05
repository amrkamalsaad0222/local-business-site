import { business } from "@/config/business";

import { FaWhatsapp } from "react-icons/fa6";

import { LuMapPin, LuClock } from "react-icons/lu";

import Image from "next/image";
import MenuWithCart from "@/components/MenuWithCart";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[70vh] items-end justify-start sm:h-auto sm:aspect-3/2 sm:max-h-[90vh]">
        <Image
          src="/images/hero.jpg"
          alt={business.name}
          fill
          priority
          className="object-cover saturate-75 brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1c1410] via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-2xl px-6 pb-10 text-start text-white sm:px-12 sm:pb-14">
          <h1 className="font-display text-5xl md:text-7xl">{business.name}</h1>
          {business.tagline && (
            <p className="mt-2 text-lg text-white/90">{business.tagline}</p>
          )}

          <a
            href="#menu"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-6 py-3 font-semibold text-[#1c1410] shadow-md transition duration-300 hover:bg-transparent hover:text-primary hover:shadow-[0_0_24px_rgba(200,119,62,0.45)] active:scale-95"
          >
            تصفّح المنيو
          </a>
        </div>
      </section>
      <MenuWithCart />

      <section className="mx-auto w-full max-w-2xl px-4 pb-16">
        <h2 className="font-display text-accent mb-6 text-2xl">تواصل معنا</h2>
        <div className="mb-2 flex items-center gap-3">
          <LuMapPin className="size-5 text-primary" />
          <span>{business.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <LuClock className="size-5 text-primary" />
          <span>{business.hours}</span>
        </div>
        <a
          href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("عندي استفسار: ")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#34b86a]/70 bg-[#34b86a]/80 px-6 py-3 font-semibold text-[#0b1220] shadow-md transition duration-300 hover:bg-transparent hover:text-[#34b86a] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] active:scale-95"
        >
          <FaWhatsapp className="size-5" />
          تواصل معنا على واتساب
        </a>
      </section>
    </>
  );
}
