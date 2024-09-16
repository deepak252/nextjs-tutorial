import Link from "next/link";

export default function F4() {
  return (
    <div>
      <h4>F4 Page</h4>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
