// Route: "/products/<productId>/reviews"
export default function ProductReviewsPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h3>Product {params.productId} Reviews</h3>
      <p>Review 1</p>
      <p>Review 2</p>
    </div>
  );
}
