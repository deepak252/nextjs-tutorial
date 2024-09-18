import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h4>Welcome Home</h4>
      <Link href="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
    </div>
  );
}
