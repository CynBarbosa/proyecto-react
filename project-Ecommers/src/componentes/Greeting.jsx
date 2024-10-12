import { useState } from "react";
import "../style/itemList.css";

const Greeting = ({ message }) => {
  const [count, setCount] = useState(0);
  const [countHover, setCountHover] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleHover = () => {
    setCountHover((prevCountHover) => prevCountHover + 1);
  };

  return (
    <>
      <h1 className="mensaje">{message}</h1>
      <button className="boton" onClick={handleClick}>
        Hola!
      </button>
      <span className="boton-span">{count}</span>
      <div className="cuadradito" onMouseEnter={handleHover}>
        <span>{countHover}</span>
      </div>
    </>
  );
};

export default Greeting;
