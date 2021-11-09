import React from "react";

// Interfaces
import { ProductProps } from "../../Util/Interfaces";

const ProductCard = (props: ProductProps) => {
  return (
    <div className="product__card">
      <h1>{props.title}</h1>
      <h2>{props.precio}</h2>
      <h3>{props.cantidad}</h3>
    </div>
  );
};

export default ProductCard;
