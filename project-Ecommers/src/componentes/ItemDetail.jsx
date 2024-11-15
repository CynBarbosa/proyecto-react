import React, { useContext, useState } from "react";
import "../style/itemDetail.css";
import { Cart } from "../context/CartProvider";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(Cart);

  const addHandler = (contador) => {
    addItem(item, contador);
    setCount(contador);
  };

  return (
    <div className="conteiner2">
      <div className="itemDetail">
        <img src={item.pictureUrl} style={{ width: 300 }} />

        <div>
          <NavLink className={"VolverHome"} to={"/"}>
            ←Volver al Home
          </NavLink>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h2>${item.price}</h2>
          {count === 0 ? (
            <ItemCount
              stock={item.stock}
              initial={item.initial}
              onAdd={addHandler}
            ></ItemCount>
          ) : (
            <>
              <h5 className="">Cantidad agregada: {count}</h5>
              <NavLink to="/cart">
                <button className="">Ir al carrito</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
