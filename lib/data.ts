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
    logo: "/vendors/padisquare-logo.png",
    heroImage: "/vendors/padisquare-logo.png",
  },
  {
    slug: "fresh-basket",
    name: "Fresh Basket",
    logo: "/vendors/fresh-basket-logo.png",
    heroImage: "/vendors/fresh-basket-hero.jpg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    vendorSlug: "orizon-mart",
    name: "Organic Tomatoes",
    price: 2500,
    image: "https://i.pinimg.com/736x/37/ad/88/37ad88eebaf33d2b437439b22115bdbf.jpg",
    createdAt: "2025-01-05",
  },
  {
    id: "2",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
  {
    id: "3",
    vendorSlug: "fresh-basket",
    name: "Golden Apples",
    price: 3200,
    image: "/products/apples.jpg",
    createdAt: "2025-01-12",
  },  {
    id: "4",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "5",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "6",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "7",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "8",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
    {
    id: "9",
    vendorSlug: "orizon-mart",
    name: "Fresh Spinach",
    price: 1800,
    image: "/products/spinach.jpg",
    createdAt: "2025-01-10",
  },
];
