import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopProducts from "@/components/ShopProducts";
import Breadcrumbs from "@/components/Breadcrumbs";

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
            Shop
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "12px",
            }}
          >
            Browse our complete Halloween collection.
          </p>

          <ShopProducts />

        </div>
      </main>

      <Footer />
    </>
  );
}
