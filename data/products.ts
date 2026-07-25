export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "classic-vampire-costume",
    name: "Classic Vampire Costume",
    price: 49.99,
    category: "Costumes",
    image: "/products/vampire.jpg",
    description:
      "Classic vampire costume perfect for Halloween parties.",
  },
  {
    id: 2,
    slug: "scary-clown-mask",
    name: "Scary Clown Mask",
    price: 29.99,
    category: "Masks",
    image: "/products/clown-mask.jpg",
    description:
      "High quality scary clown mask for horror events.",
  },
  {
    id: 3,
    slug: "halloween-decoration-kit",
    name: "Halloween Decoration Kit",
    price: 39.99,
    category: "Decorations",
    image: "/products/decorations.jpg",
    description:
      "Complete decoration kit for haunted houses.",
  },
  {
    id: 4,
    slug: "gothic-hooded-cloak",
    name: "Gothic Hooded Cloak",
    price: 59.99,
    category: "Fashion",
    image: "/products/cloak.jpg",
    description:
      "Premium gothic hooded cloak with elegant design.",
  },
];
