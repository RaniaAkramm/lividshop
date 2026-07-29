import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: "30px",
        fontSize: "15px",
      }}
    >
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              style={{
                color: "#ff6a00",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span
              style={{
                margin: "0 10px",
                color: "#888",
              }}
            >
              /
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
