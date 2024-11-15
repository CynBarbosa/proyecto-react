import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../style/itemList.css";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id });
        } else {
          <>
            <h2>No se encontro documento!</h2>
          </>;
        }
        setLoading(false);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  return loading ? (
    <h1>Loading.. </h1>
  ) : (
    product && <ItemDetail item={product} />
  );
};

export default ItemDetailContainer;
