import { business } from "@/config/business";

import { FaWhatsapp } from "react-icons/fa6";

import Image from "next/image";

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
          <h1 className="text-5xl font-bold md:text-7xl">{business.name}</h1>
          {business.tagline && (
            <p className="mt-2 text-lg text-white/90">{business.tagline}</p>
          )}
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25d365eb] px-6 py-3 font-semibold text-[#0b1220] shadow-md transition duration-300 hover:bg-[#0b1220] hover:text-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] active:scale-95"
          >
            <FaWhatsapp className="size-5" />
            اطلب على واتساب
          </a>
        </div>
      </section>

      <main className="mx-auto max-w-2xl px-4 py-8">
        {business.menu.map((m) => (
          <section key={m.id}>
            <h2 className="text-accent mt-12 mb-6 text-2xl font-bold">
              {m.name}
            </h2>
            {m.items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between py-3 border-b border-white/20"
              >
                <div>
                  <p>
                    {i.name}
                    {i.featured ? (
                      <span className="ms-2 rounded-full bg-primary/20 px-2 text-xs text-primary">
                        مميز
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  {i.description && (
                    <p className="text-sm text-foreground/60">
                      {i.description}
                    </p>
                  )}
                </div>
                <p className="text-primary font-semibold">
                  {i.price} {business.currency}
                </p>
              </div>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
