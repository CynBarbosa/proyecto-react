import React, { useContext, useState } from "react";
import "../style/itemDetail.css";
import { Cart } from "../context/CartProvider";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(Cart);
  const [itemCountVisibility, setItemCountVisibility] = useState(true);

  const handleCart = (quantity) => {
    console.log(quantity);
    setItemCountVisibility(false);
    addCart({ ...product, quantity });
    addCart(product, 1);
  };

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
          {itemCountVisibility ? (
            <ItemCount addCart={handleCart} />
          ) : (
            <button>
              <NavLink to={"/cart"}>Go cart</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
