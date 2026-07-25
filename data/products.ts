export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  rating: number;
  reviews: number;
  brand: string;
  stock: number;
  affiliateUrl: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "classic-vampire-costume",
    name: "Classic Vampire Costume",
    price: 49.99,
    category: "Costumes",
    images: [
      "/products/vampire-1.jpg",
      "/products/vampire-2.jpg",
      "/products/vampire-3.jpg",
    ],
    description:
      "Classic vampire costume perfect for Halloween parties and cosplay events.",
    rating: 4.8,
    reviews: 284,
    brand: "Livid Halloween",
    stock: 18,
    affiliateUrl: "https://example.com/affiliate/vampire",
  },

  {
    id: 2,
    slug: "scary-clown-mask",
    name: "Scary Clown Mask",
    price: 29.99,
    category: "Masks",
    images: [
      "/products/clown-mask-1.jpg",
      "/products/clown-mask-2.jpg",
      "/products/clown-mask-3.jpg",
    ],
    description:
      "High quality scary clown mask with realistic horror details.",
    rating: 4.7,
    reviews: 192,
    brand: "Livid Horror",
    stock: 42,
    affiliateUrl: "https://example.com/affiliate/clown-mask",
  },

  {
    id: 3,
    slug: "halloween-decoration-kit",
    name: "Halloween Decoration Kit",
    price: 39.99,
    category: "Decorations",
    images: [
      "/products/decorations-1.jpg",
      "/products/decorations-2.jpg",
      "/products/decorations-3.jpg",
    ],
    description:
      "Complete Halloween decoration kit for haunted houses and parties.",
    rating: 4.9,
    reviews: 356,
    brand: "Livid Decor",
    stock: 25,
    affiliateUrl: "https://example.com/affiliate/decorations",
  },

  {
    id: 4,
    slug: "gothic-hooded-cloak",
    name: "Gothic Hooded Cloak",
    price: 59.99,
    category: "Fashion",
    images: [
      "/products/cloak-1.jpg",
      "/products/cloak-2.jpg",
      "/products/cloak-3.jpg",
    ],
    description:
      "Premium gothic hooded cloak with elegant design for Halloween and cosplay.",
    rating: 4.9,
    reviews: 145,
    brand: "Livid Gothic",
    stock: 12,
    affiliateUrl: "https://example.com/affiliate/cloak",
  },
];
