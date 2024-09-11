export default function ProductDetailsPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h3>Product Details - {params.productId}</h3>
    </div>
  );
}
