import Link from "next/link";

const categories = [
  {
    title: "Halloween Costumes",
    href: "/category/costumes",
  },
  {
    title: "Horror Masks",
    href: "/category/masks",
  },
  {
    title: "Decorations",
    href: "/category/decorations",
  },
  {
    title: "Gothic Fashion",
    href: "/category/gothic-fashion",
  },
];

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="title">
          Shop by Category
        </h2>

        <div
          className="grid grid-4"
          style={{ marginTop: "40px" }}
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="card"
            >
              <div style={{ padding: "30px" }}>
                <h3>{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
