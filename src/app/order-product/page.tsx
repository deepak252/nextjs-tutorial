"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.replace("/");
    // router.back()
  };
  return (
    <div>
      <h4>Order Product</h4>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
