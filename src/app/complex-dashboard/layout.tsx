export default function ComplextDashboardLayout({
  children,
  notifications,
  users,
  revenue,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedin = false;
  return isLoggedin ? (
    <div>
      {children}
      <div>{notifications}</div>
      <div>{users}</div>
      <div>{revenue}</div>
    </div>
  ) : (
    login
  );
}
