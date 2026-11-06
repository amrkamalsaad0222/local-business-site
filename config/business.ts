import { Business } from "@/types/business";

export const business: Business = {
  name: "aya & alaa (kersh coffee)",
  tagline: "shai w7sh",
  whatsapp: "201211213667",
  instagram: "اسم_الحساب",
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
          image: "/images/turkish-coffee.jpg",
          price: 40,
          featured: true,
          description: "قهوة تركي مظبوطة على نار هادية",
        },
        { id: "tea", name: "شاي كشري", price: 15 },
        { id: "nescafe", name: "نسكافيه", price: 30 },
        { id: "french-coffee", name: "قهوة فرنسية", price: 45 },
      ],
    },
    {
      id: "cold-drinks",
      name: "مشروبات باردة",
      items: [
        {
          id: "iced-latte",
          name: "سبانش لاتية",
          image: "/images/iced-latte.jpg",
          price: 120,
          featured: true,
        },
        {
          id: "lemonade",
          name: "ليمون بالنعناع",
          image: "/images/lemonade.jpg",
          price: 45,
        },
        { id: "white-moca", name: "وايت موكا", price: 60 },
      ],
    },
    {
      id: "desserts",
      name: "حلويات",
      items: [
        {
          id: "chocolate-cake",
          name: "كيك شوكولاتة",
          image: "/images/chocolate-cake.jpg",
          price: 70,
          featured: true,
          description: "كيك شوكولاتة طري بصوص غني",
        },
        {
          id: "brownie",
          name: "براوني",
          image: "/images/brownie.jpg",
          price: 55,
        },
        { id: "basbousa", name: "بسبوسة", price: 35 },
      ],
    },
  ],
  locale: "ar",
  currency: "EGP",
};
