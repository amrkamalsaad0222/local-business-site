"use client";

import { business } from "@/config/business";

import Image from "next/image";

import type { MenuItem } from "@/types/business";

export default function MenuItemCard({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (id: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/20 py-3">
      <div className="flex items-center gap-3">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="size-20 rounded-lg object-cover"
          />
        )}
        <div>
          <p className="flex items-center gap-2">
            {item.name}
            {item.featured && (
              <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-sm text-primary">
                مميز
              </span>
            )}
          </p>
          {item.description && (
            <p className="text-sm text-foreground/60">{item.description}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-[#1c1410] transition hover:opacity-80 active:scale-95"
          type="button"
          onClick={() => onAdd(item.id)}
        >
          أضف
        </button>
        <p className="whitespace-nowrap text-primary font-semibold">
          {item.price} {business.currency}
        </p>
      </div>
    </div>
  );
}
