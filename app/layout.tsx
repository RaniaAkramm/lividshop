import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://lividshop.com"),

  title: {
    default: "LividShop",
    template: "%s | LividShop",
  },

  description:
    "Discover Halloween costumes, horror masks, gothic fashion, spooky decorations and collectibles from trusted affiliate partners.",

  applicationName: "LividShop",

  keywords: [
    "Halloween",
    "Halloween Costumes",
    "Horror Masks",
    "Gothic Fashion",
    "Halloween Decorations",
    "Collectibles",
    "Affiliate Store",
    "LividShop",
  ],

  authors: [
    {
      name: "LividShop",
    },
  ],

  creator: "LividShop",

  publisher: "LividShop",

  category: "shopping",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://lividshop.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "LividShop",

    description:
      "Discover Halloween costumes, horror masks, gothic fashion, spooky decorations and collectibles.",

    url: "https://lividshop.com",

    siteName: "LividShop",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "LividShop",

    description:
      "Discover Halloween costumes, horror masks, gothic fashion, spooky decorations and collectibles.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: "#ff6a00",

  appleWebApp: {
    capable: true,
    title: "LividShop",
    statusBarStyle: "black-translucent",
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
