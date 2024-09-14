import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/docs2">Docs</Link>
      <Link href="/products">Products</Link>
      <h3>Welcome Home</h3>
    </div>
  );
}
