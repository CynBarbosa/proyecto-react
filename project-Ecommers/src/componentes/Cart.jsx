import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Cart as CartContext } from "../context/CartProvider";
import endPurchase from "../services/endPurchase";
import "../style/cart.css";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [order, setOrder] = useState(null);

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((elemento) => {
      total += elemento.item.price * elemento.quantity;
    });
    return total;
  };

  const handlePurchase = async () => {
    try {
      const generatedOrder = await endPurchase(cart);
      setOrder(generatedOrder);
    } catch (error) {
      console.error("Error generating order:", error);
    }
  };

  const renderCarritoVacio = () => {
    return (
      <div className="containerCart">
        <div>
          <h5>No hay elementos en el carrito</h5>
        </div>
        <div>
          <NavLink to="/">
            <button> Home </button>
          </NavLink>
        </div>
      </div>
    );
  };

  const renderCarrito = () => {
    return (
      <div className="containerCart">
        <div>
          {cart.map((elemento) => (
            <div className="cardConteinerCart" key={elemento.item.id}>
              <div className="imgCart">
                <img
                  src={elemento.item.pictureUrl}
                  alt="preview"
                  style={{ width: 150 }}
                />
              </div>
              <div className="conteinerTextCart">
                <div>
                  <h5>{elemento.item.title}</h5>
                </div>
                <div>
                  <div>
                    <h6>
                      <strong>Cantidad: {elemento.quantity}</strong>
                    </h6>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => removeItem(elemento.item.id)}
                      className="botonQuitar"
                    >
                      <i aria-hidden="true">Quitar</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <div>
              <h3>
                <strong>
                  Total: $<b>{calcularTotal()}.-</b>
                </strong>
              </h3>
              {cart.length ? (
                <button className="endPurchase" onClick={handlePurchase}>
                  Finalizar compra
                </button>
              ) : (
                <h1>No hay productos en el carrito</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {cart.length === 0 ? renderCarritoVacio() : renderCarrito()}
      <OrderSummary order={order} />{" "}
    </>
  );
};

export default Cart;
