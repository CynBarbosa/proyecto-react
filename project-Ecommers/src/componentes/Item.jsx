import React from "react";
import { NavLink } from "react-router-dom";
import "../style/item.css";

const Item = ({ item }) => {
  return (
    <div className="container">
      <img src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button>Ver mas...</button>
      </NavLink>
    </div>
  );
};

export default Item;
