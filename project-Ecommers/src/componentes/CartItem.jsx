import React from "react";
import "../style/cartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img src={item.pictureUrl} />
      <div className="cartItemContenido">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <p>{item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
