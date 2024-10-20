import React, { useEffect, useState } from "react";
import products from "../assets/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../style/itemList.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const product = products.find(
      (productToFind) => productToFind.id === Number(id)
    );
    setProduct(product);
  }, [id]);

  return product && <ItemDetail product={product} />;
};

export default ItemDetailContainer;
