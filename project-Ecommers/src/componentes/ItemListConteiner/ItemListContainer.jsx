import React from "react";
import Greeting from "../Greeting";
import "../style/itemList.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="tituloItemList">ItemListContainer</div>
      <Greeting message="Usando Greeting" />
    </>
  );
};

export default ItemListContainer;
