import { useEffect, useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);
  const [countSuma, setCountSuma] = useState(false);

  const addHandler = () => {
    props.onAdd(count);
  };

  useEffect(() => {
    return;
  }, []);

  useEffect(() => {}, [countSuma]);

  const removeHandle = () => {
    if (count >= 1) setCount(count - 1);
  };

  const addHandle = () => {
    if (count < props.stock) {
      setCount(count + 1);
      setCountSuma(!countSuma);
    }
  };
  return (
    <div>
      <div>
        <button onClick={removeHandle}>-</button>
        <h5>{count}</h5>
        <button onClick={addHandle}>+</button>
      </div>
      <p className="card-text"></p>
      <button onClick={addHandler}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
