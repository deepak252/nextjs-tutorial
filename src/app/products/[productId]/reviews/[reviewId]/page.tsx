// Route: "/products/<productId>/reviews/<reviewId>"
export default function ProductReviewDetailsPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h3>
        Product {params.productId} Review Details - {params.reviewId}{" "}
      </h3>
    </div>
  );
}
