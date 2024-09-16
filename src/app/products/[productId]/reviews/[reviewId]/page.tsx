import { notFound } from "next/navigation";

// Route: "/products/<productId>/reviews/<reviewId>"
export default function ProductReviewDetailsPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  console.log(Number(params.reviewId));

  if (isNaN(Number(params.reviewId))) {
    throw new Error("Invalid review Id");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h3>
        Product {params.productId} Review Details - {params.reviewId}{" "}
      </h3>
    </div>
  );
}
