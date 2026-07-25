import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: {
    default: "LividShop",
    template: "%s | LividShop",
  },
  description:
    "Halloween costumes, horror masks, gothic fashion, decorations, and spooky collectibles.",
  keywords: [
    "Halloween",
    "Costumes",
    "Masks",
    "Horror",
    "Gothic",
    "Decorations",
    "LividShop",
    "Affiliate Store",
  ],
  authors: [
    {
      name: "LividShop",
    },
  ],
  creator: "LividShop",
  publisher: "LividShop",
  metadataBase: new URL("https://lividshop.com"),
  openGraph: {
    title: "LividShop",
    description:
      "Halloween costumes, horror masks, gothic fashion, decorations, and spooky collectibles.",
    url: "https://lividshop.com",
    siteName: "LividShop",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
