import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        let productsFiltered = [];

        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        }

        const productosConStock = productsFiltered.filter(
          (product) => product.stock > 0
        );

        setProducts(productosConStock);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, [categoryId]);

  return loading ? <h1>Loading.. </h1> : <ItemList products={products} />;
};

export default ItemListContainer;
