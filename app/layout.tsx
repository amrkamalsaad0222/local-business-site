import type { Metadata } from "next";
import { Cairo, Lalezar } from "next/font/google";
import "./globals.css";
import type { CSSProperties } from "react";
import { business } from "@/config/business";

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["arabic", "latin"],
  weight: "400",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: business.name,
  description: business.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      style={
        {
          "--brand-primary": business.colors.primary,
          "--brand-accent": business.colors.accent,
        } as CSSProperties
      }
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${lalezar.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
