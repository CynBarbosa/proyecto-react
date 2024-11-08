import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import endPurchase from "../services/endPurchase";
import "../style/cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const handlePurchase = () => {
    const order = {
      buyer: {
        name: "Jhon",
        lastName: "Doe",
        email: "jhon",
      },
      products: cart,
      total: 1245, //reemplazar por un método correspondiente (reduce, useMemo),
      timestamp: serverTimestamp(),
    };
    (async () => {
      try {
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="containerCart">
      {cart.length ? (
        <>
          {cart.map((cartItem) => {
            return <CartItem item={cartItem} key={cartItem.id} />;
          })}
          <>
            (
            <button className="endPurchase" onClick={() => endPurchase(cart)}>
              End purchase
            </button>
            ):(
            <button>
              <NavLink to={"/orders/:ordersId"}>Ir a la orden</NavLink>
            </button>
            )
          </>
        </>
      ) : (
        <>
          <h1>No hay productos en el cart</h1>
          <NavLink to={"/"}>Home</NavLink>
        </>
      )}
    </div>
  );
};

export default Cart;
