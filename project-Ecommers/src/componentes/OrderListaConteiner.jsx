import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderListaConteiner = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setOrder({ ...docSnap.data(), id });
        } else {
          <>
            <h2>No se encontro documento!</h2>
          </>;
        }
        setLoading(false);
      } catch (error) {}
    };
    getOrder();
  }, [id]);

  return loading ? <h1>Loading.. </h1> : order && <OrderLista order={order} />;
};

export default OrderListaConteiner;
