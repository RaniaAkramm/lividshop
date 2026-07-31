import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn how LividShop earns commissions through affiliate partnerships.",
};

export default function AffiliateDisclosurePage() {
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
                label: "Affiliate Disclosure",
              },
            ]}
          />

          <h1 className="title">
            Affiliate Disclosure
          </h1>

          <p
            className="subtitle"
            style={{
              marginTop: "24px",
              lineHeight: "2",
            }}
          >
            LividShop participates in affiliate marketing programs.
            This means we may earn a commission when you purchase
            products through links on our website.
          </p>

          <p
            className="subtitle"
            style={{
              marginTop: "20px",
              lineHeight: "2",
            }}
          >
            These commissions help support our website and allow us
            to continue providing product recommendations at no
            additional cost to you.
          </p>

          <p
            className="subtitle"
            style={{
              marginTop: "20px",
              lineHeight: "2",
            }}
          >
            We only recommend products we believe may be valuable to
            our visitors. Prices and availability may change without
            notice and are controlled by the partner stores.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}
