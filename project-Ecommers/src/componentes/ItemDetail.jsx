import React from "react";
import "../style/itemDetail.css";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ product }) => {
  console.log(product);

  return (
    <div className="conteiner2">
      <div className="itemDetail">
        <img src={product.pictureUrl} style={{ width: 300 }} />
        <div>
          <NavLink className={"VolverHome"} to={"/"}>
            ←Volver al Home
          </NavLink>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button>Agregar al carrito!</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
