import { business } from "@/config/business";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { LuMapPin, LuClock } from "react-icons/lu";

import Image from "next/image";

import MenuWithCart from "@/components/MenuWithCart";

const developer = {
  name: "AKS",
  whatsapp: "201515437193",
};

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

      <section className="mx-auto w-full max-w-2xl px-4 pb-8">
        <h2 className="font-display text-accent mb-6 text-2xl">تواصل معنا</h2>
        <div className="mb-2 flex items-center gap-3">
          <LuMapPin className="size-5 text-primary" />
          <span>{business.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <LuClock className="size-5 text-primary" />
          <span>{business.hours}</span>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("عندي استفسار: ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#34b86a]/70 bg-[#34b86a]/80 px-6 py-3 font-semibold text-[#0b1220] shadow-md transition duration-300 hover:bg-transparent hover:text-[#34b86a] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] active:scale-95"
          >
            <FaWhatsapp className="size-5" />
            تواصل معنا على واتساب
          </a>

          {business.instagram && (
            <a
              href={`https://instagram.com/${business.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block rounded-full bg-linear-to-r from-[#4a1d6e] via-[#8a1c4a] to-[#b5651d] p-0.5 shadow-[0_0_14px_rgba(176,35,95,0.3)] transition duration-300 hover:shadow-[0_0_28px_rgba(176,35,95,0.55)] active:scale-95"
            >
              <span className="flex items-center gap-2 rounded-full bg-[#1c1410] px-6 py-3 font-semibold text-white transition duration-300 group-hover:bg-transparent">
                <FaInstagram className="size-5" />
                تابعنا على الانستاجرام
              </span>
            </a>
          )}
        </div>
      </section>
      <footer className="space-y-3 px-4 pb-24 pt-8 text-center text-sm text-foreground/60">
        <p>© 2026 {business.name}</p>
        <p>تصميم وتطوير: {developer.name}</p>
        <a
          href={`https://wa.me/${developer.whatsapp}?text=${encodeURIComponent("عايز موقع لمحلي")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-primary/60 px-4 py-1.5 text-primary transition duration-300 hover:bg-primary hover:text-[#1c1410] active:scale-95"
        >
          تواصل معي
        </a>
      </footer>
    </>
  );
}
