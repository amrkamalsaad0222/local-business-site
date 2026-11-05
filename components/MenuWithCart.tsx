"use client";

import MenuItemCard from "./MenuItemCard";

import { business } from "@/config/business";

import { useState } from "react";

export default function MenuWithCart() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const allItems = business.menu.flatMap((m) => m.items);

  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const totalPrice = allItems.reduce(
    (sum, item) => sum + item.price * (cart[item.id] ?? 0),
    0,
  );

  const orderItem = allItems.filter((item) => (cart[item.id] ?? 0) > 0);

  const addItem = (id: string) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <>
      <main id="menu" className="mx-auto w-full max-w-2xl px-4 pb-24">
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
        <div className="fixed inset-x-0 bottom-0 bg-primary p-4 text-center z-50 text-[#1c1410] font-semibold">
          طلبك ({totalCount}) — {totalPrice} {business.currency}
        </div>
      )}
    </>
  );
}
