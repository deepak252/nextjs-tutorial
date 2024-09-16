import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Default Notifications
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
