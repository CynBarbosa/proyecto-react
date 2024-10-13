import cart from "../assets/img/cart-buy.svg";
import "../style/navBar.css";

const CartWidget = () => {
  return (
    <>
      <div className="carrito">
        <img src={cart} alt="cart" style={{ width: 35, margin: 10 }} />
        <span>(4)</span>
      </div>
    </>
  );
};

export default CartWidget;
