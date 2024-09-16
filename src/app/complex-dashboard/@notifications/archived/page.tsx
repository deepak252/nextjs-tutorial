import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Arvhived Notifications
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
