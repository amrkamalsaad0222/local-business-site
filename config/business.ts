import { Business } from "../types/business";

export const business: Business = {
  name: "اسم المكان",
  whatsapp: "201211213667",
  address: "العنوان هنا",
  hours: "يوميًا من 10 ص إلى 12 م",
  colors: {
    primary: "#b45309",
    accent: "#78350f",
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
