import React, { useState, useEffect } from "react";

const Events = () => {
  const [inputName, setInputName] = useState("");
  const [inputDni, setInputDni] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handleEscapeModal = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        console.log("Will disable modal");

        setModalVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscapeModal);

    return () => {
      console.log("se desmonta Events");
      window.removeEventListener("keydown", handleEscapeModal);
    };
  }, []);

  const handleClick = (event) => {
    console.log(event);
  };

  console.log(inputName);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputName);
    setInputName("");
  };

  return (
    <>
      <div>
        <h1>Events</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nombre..."
            type="text"
            alt="name-input"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <input
            placeholder="DNI..."
            type="number"
            alt="dni-input"
            value={inputDni}
            onChange={(event) => setInputDni(event.target.value)}
          />
          <button onClick={handleClick} type="submit">
            Click me!
          </button>
        </form>
        <button onClick={() => setModalVisible(true)}>Open modal</button>
      </div>
      {modalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h1>Modal content</h1>
            <button onClick={() => setModalVisible(false)}>Close modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
