import React, { useEffect, useState } from "react";
import mockProducts from "../assets/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    const promise1 = new Promise((res, rej) => {
      setTimeout(() => {
        res(mockProducts);
      }, 2000);
    });

    try {
      const getProducts = async () => {
        setLoading(true);
        setError(null);
        const products = await promise1;
        let productsFiltered;
        if (categoryId) {
          productsFiltered = products.filter(
            (product) => product.category === categoryId
          );
        } else {
          productsFiltered = products;
        }
        setProducts(productsFiltered);
        setLoading(false);
      };

      getProducts();
    } catch (error) {
      setError(error.message);
    }
  }, [categoryId]);

  return loading ? <h1>Loading.. </h1> : <ItemList products={products} />;
};

export default ItemListContainer;
