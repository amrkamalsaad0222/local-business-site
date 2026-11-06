"use client";

import MenuItemCard from "./MenuItemCard";

import { business } from "@/config/business";

import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa6";

export default function MenuWithCart() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedId, setSelectedId] = useState<string>(business.menu[0].id);

  const allItems = business.menu.flatMap((m) => m.items);

  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const totalPrice = allItems.reduce(
    (sum, item) => sum + item.price * (cart[item.id] ?? 0),
    0,
  );

  const orderedItems = allItems.filter((item) => (cart[item.id] ?? 0) > 0);

  const orderLines = orderedItems.map(
    (item) => `- ${item.name} x ${cart[item.id]}`,
  );

  const message = `عايز أطلب:\n${orderLines.join("\n")}\nالإجمالي: ${totalPrice} ${business.currency}`;

  const addItem = (id: string) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

  const selectedCategory = business.menu.find((m) => m.id === selectedId);
  return (
    <>
      <main id="menu" className="mx-auto w-full max-w-2xl px-4 pb-24 mt-4">
        <div className="flex justify-center gap-2 overflow-x-auto py-2">
          {business.menu.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedId(m.id)}
              className={`whitespace-nowrap rounded-full border border-primary px-4 py-1.5 font-semibold transition duration-300 active:scale-95 ${
                m.id === selectedId
                  ? "bg-primary text-[#1c1410] shadow-[0_0_16px_rgba(200,119,62,0.45)]"
                  : "text-primary hover:bg-primary/20 hover:shadow-[0_0_12px_rgba(200,119,62,0.3)]"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        <section>
          <h2 className="text-center text-accent font-display mt-12 mb-6 text-2xl">
            {selectedCategory?.name}
          </h2>
          {selectedCategory?.items.map((i) => (
            <MenuItemCard onAdd={addItem} key={i.id} item={i} />
          ))}
        </section>
      </main>
      {totalCount > 0 && (
        <div className=" fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 border-t border-white/20 bg-[#1c1410] p-2">
          <p className="font-semibold text-accent ">
            طلبك ({totalCount}) — {totalPrice} {business.currency}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 rounded-full bg-primary px-6 py-2 font-bold text-[#1c1410] transition hover:opacity-90 active:scale-95"
          >
            <FaWhatsapp className="size-5" />
            أرسل الطلب
          </a>
        </div>
      )}
    </>
  );
}
