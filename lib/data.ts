// lib/data.ts

export type Vendor = {
  slug: string;
  name: string;
  logo: string;
  heroImage: string;
};

export type Product = {
  id: string;
  vendorSlug: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
};

export const vendors: Vendor[] = [
  {
    slug: "orizon-mart",
    name: "Orizon Mart",
    logo: "/vendors/orizon-logo.png",
    heroImage: "/vendors/padisquare-logo.png",
  },
  {
    slug: "fresh-basket",
    name: "Fresh Basket",
    logo: "/vendors/fresh-basket-logo.png",
    heroImage: "/vendors/padisquare-logo.png",
  },
];

export const products: Product[] = [
  {
    id: "1",
    vendorSlug: "orizon-mart",
    name: "Wireless Earbuds",
    price: 7500,
    image: "/products/earbuds.jpg",
    createdAt: "2025-01-05",
  },
  {
    id: "2",
    vendorSlug: "orizon-mart",
    name: "Mechanical Keyboard",
    price: 15000,
    image: "/products/keyboard.jpg",
    createdAt: "2025-01-10",
  },
  {
    id: "3",
    vendorSlug: "fresh-basket",
    name: "Fresh Apples",
    price: 3200,
    image: "/products/apples.jpg",
    createdAt: "2025-01-12",
  },  {
    id: "4",
    vendorSlug: "orizon-mart",
    name: "Multi-Port GaN Charger",
    price: 5500,
    image: "/products/gan-charger.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "5",
    vendorSlug: "orizon-mart",
    name: "High-Speed Power Bank",
    price: 12000,
    image: "/products/power-bank.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "6",
    vendorSlug: "orizon-mart",
    name: "Smart Home Speaker Hub",
    price: 25000,
    image: "/products/speaker.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "7",
    vendorSlug: "orizon-mart",
    name: "USB-C Laptop Docking Station",
    price: 30000,
    image: "/products/docking-station.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "8",
    vendorSlug: "orizon-mart",
    name: "USB Streaming Microphone",
    price: 20000,
    image: "/products/microphone.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "9",
    vendorSlug: "orizon-mart",
    name: "Mac M2 Laptop",
    price: 1200000,
    image: "/products/mac.jpg",
    createdAt: "2025-01-10",
  },
];
