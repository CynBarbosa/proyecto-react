import React from "react";
import "../style/itemDetail.css";

const ItemDetail = ({ product }) => {
  console.log(product);

  return (
    <div className="itemDetail">
      <img src={product.pictureUrl} style={{ width: 300 }} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <button>Agregar al carrito!</button>
      </div>
    </div>
  );
};

export default ItemDetail;
