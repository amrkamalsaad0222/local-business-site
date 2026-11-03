import { Business } from "../types/business";

export const business: Business = {
  name: "اسم المكان",
  tagline: "قهوة وأكل بيتي",
  whatsapp: "201211213667",
  address: "العنوان هنا",
  hours: "يوميًا من 10 ص إلى 12 م",
  colors: {
    primary: "#c8773e",
    accent: "#e8c9a0",
  },
  menu: [
    {
      id: "hot-drinks",
      name: "مشروبات ساخنة",
      items: [
        {
          id: "turkish-coffee",
          name: "قهوة تركي",
          price: 40,
          featured: true,
          description: "قهوة تركي مظبوطة على نار هادية",
        },
        { id: "tea", name: "شاي كشري", price: 15 },
      ],
    },
  ],
  locale: "ar",
  currency: "EGP",
};
