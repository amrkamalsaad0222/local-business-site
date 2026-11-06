"use client";

import MenuItemCard from "./MenuItemCard";

import { business } from "@/config/business";

import { useState } from "react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function MenuWithCart() {
  const [cart, setCart] = useState<Record<string, number>>({});

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

  return (
    <>
      <main id="menu" className="mx-auto w-full max-w-2xl px-4 pb-24 ">
        {business.menu.map((m) => (
          <section key={m.id}>
            <h2 className="text-accent font-display mt-12 mb-6 text-2xl">
              {m.name}
            </h2>
            {m.items.map((i) => (
              <MenuItemCard onAdd={addItem} key={i.id} item={i} />
            ))}
          </section>
        ))}
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
