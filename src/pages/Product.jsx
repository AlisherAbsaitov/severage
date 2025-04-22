import React from "react";
import { useStore } from "../store/CreatZustand";

export default function Product() {
  const product = useStore((state) => state.product);
  console.log(product);

  return (
    <div className="container mx-auto">
      <img src={product.product_img} alt="" />
      <p>{product.product_desc}</p>
    </div>
  );
}
