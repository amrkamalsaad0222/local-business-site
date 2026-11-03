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
          <h1 className="font-display text-5xl md:text-7xl">{business.name}</h1>
          {business.tagline && (
            <p className="mt-2 text-lg text-white/90">{business.tagline}</p>
          )}
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#34b86a]/70 bg-[#34b86a]/80 px-6 py-3 font-semibold text-[#0b1220] shadow-md transition duration-300 hover:bg-transparent hover:text-[#34b86a] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] active:scale-95"
          >
            <FaWhatsapp className="size-5" />
            اطلب على واتساب
          </a>
        </div>
      </section>

      <main className="mx-auto max-w-2xl px-4 pb-12">
        {business.menu.map((m) => (
          <section key={m.id}>
            <h2 className="text-accent font-display mt-12 mb-6 text-2xl">
              {m.name}
            </h2>
            {m.items.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between gap-4 border-b border-white/20 py-3"
              >
                <div className="flex items-center gap-3">
                  {i.image && (
                    <Image
                      src={i.image}
                      alt={i.name}
                      width={80}
                      height={80}
                      className="size-20 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <p className="flex items-center gap-2">
                      {i.name}
                      {i.featured && (
                        <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-sm text-primary">
                          مميز
                        </span>
                      )}
                    </p>
                    {i.description && (
                      <p className="text-sm text-foreground/60">
                        {i.description}
                      </p>
                    )}
                  </div>
                </div>
                <p className="whitespace-nowrap text-primary font-semibold">
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
