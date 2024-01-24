"use client";
import React from "react";

const AddCart = () => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          console.log("added to cart");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddCart;
