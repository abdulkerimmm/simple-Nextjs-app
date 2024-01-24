import React from "react";
import AddCart from "./AddCart";
import style from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="p-3 m-4 bg-sky-300 text-gray-400 text-2xl hover:bg-sky-600">
      <AddCart />
    </div>
  );
};

export default ProductCard;
