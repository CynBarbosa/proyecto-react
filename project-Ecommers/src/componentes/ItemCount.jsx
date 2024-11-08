import { useState } from "react";
import "../style/navBar.css";

const ItemCount = ({ addCart }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
      <button onClick={() => addCart(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
