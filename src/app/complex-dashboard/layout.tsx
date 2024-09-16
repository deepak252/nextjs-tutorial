export default function ComplextDashboardLayout({
  children,
  notifications,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{notifications}</div>
      <div>{users}</div>
      <div>{revenue}</div>
    </div>
  );
}
