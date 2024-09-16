// Route: "/products/<productId>"

import { Metadata } from "next";

type ProductDetailsPageProps = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({
//   params,
// }: ProductDetailsPageProps): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: ProductDetailsPageProps): Promise<Metadata> => {
  const title: string = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 2000)
  );
  console.log({ title });

  return {
    title,
  };
};
export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  return (
    <div>
      <h3>Product Details - {params.productId}</h3>
    </div>
  );
}
