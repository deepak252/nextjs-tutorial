export default function ProducDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h4>Featured Products</h4>
    </div>
  );
}
