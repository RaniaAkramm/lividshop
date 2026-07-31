import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopProducts from "@/components/ShopProducts";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Halloween Shop | LividShop",
  description:
    "Browse Halloween costumes, horror masks, gothic fashion, spooky decorations and seasonal collectibles from trusted affiliate partners.",
  alternates: {
    canonical: "https://lividshop.com/shop",
  },
  openGraph: {
    title: "Halloween Shop | LividShop",
    description:
      "Discover the best Halloween costumes, masks, decorations and collectibles.",
    url: "https://lividshop.com/shop",
    siteName: "LividShop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Shop | LividShop",
    description:
      "Discover the best Halloween costumes, masks, decorations and collectibles.",
  },
};

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <Breadcrumbs
            items={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "Shop",
              },
            ]}
          />

          <h1 className="title">
            Halloween Shop
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "12px",
            }}
          >
            Browse our complete collection of Halloween costumes,
            horror masks, gothic fashion, spooky decorations and
            seasonal collectibles from trusted affiliate partners.
          </p>

          <ShopProducts />

        </div>
      </main>

      <Footer />
    </>
  );
}
