export type Locale = "ar" | "en";
export type Currency = "EGP" | "SAR" | "AED" | "KWD";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  featured?: boolean;
  image?: string;
}
export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
export interface Business {
  name: string;
  tagline?: string;
  whatsapp: string;
  address: string;
  hours: string;
  facebook?: string;
  instagram?: string;
  colors: {
    primary: string;
    accent: string;
  };
  menu: MenuCategory[];
  currency: Currency;
  locale: Locale;
}
