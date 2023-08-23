import React from "react";

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>₹{price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
