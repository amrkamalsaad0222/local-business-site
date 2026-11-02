import { business } from "@/config/business";

import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-primary text-3xl font-bold">{business.name}</h1>
      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-3 font-semibold text-[#0b1220] shadow-md transition duration-300 hover:bg-[#0b1220] hover:text-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] active:scale-95"
      >
        <FaWhatsapp className="size-5" />
        اطلب على واتساب
      </a>

      {business.menu.map((m) => (
        <section key={m.id}>
          <h2 className="text-accent mt-8 mb-4 text-xl font-semibold">
            {m.name}
          </h2>
          {m.items.map((i) => (
            <div
              key={i.id}
              className="flex justify-between py-3 border-b border-gray-200"
            >
              <div>
                <p>
                  {i.name}
                  {i.featured ? (
                    <span className="ms-2 rounded-full bg-amber-100 px-2 text-xs text-amber-800">
                      مميز
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                {i.description && (
                  <p className="text-sm text-gray-500">{i.description}</p>
                )}
              </div>
              <p>
                {i.price} {business.currency}
              </p>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
