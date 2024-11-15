import { createContext, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setcantidadTotal] = useState(0);

  const cambiarCantidad = (auxCart, elementoExistente, nuevaCant) => {
    const index = cart.indexOf(elementoExistente);
    auxCart[index].quantity += nuevaCant;
    setcantidadTotal(nuevaCant + cantidadTotal);
    setCart(auxCart);
  };

  const pushItem = (nuevoItem, nuevaCant, auxCart) => {
    auxCart.push({ item: nuevoItem, quantity: nuevaCant });
    setcantidadTotal(nuevaCant + cantidadTotal);
    setCart(auxCart);
  };

  const addItem = (nuevoItem, nuevaCant) => {
    const elementoExistente = cart.find((e) => e.item.id === nuevoItem.id);
    const auxCart = [...cart];
    elementoExistente === undefined
      ? pushItem(nuevoItem, nuevaCant, auxCart)
      : cambiarCantidad(auxCart, elementoExistente, nuevaCant);
  };

  const removeItem = (itemId) => {
    const itemElegido = cart.filter((e) => e.item.id === itemId);
    const auxCantidad = cantidadTotal - itemElegido[0].quantity;
    const newCart = cart.filter((e) => e.item.id !== itemId);
    setCart(newCart);
    setcantidadTotal(auxCantidad);
  };

  const clear = () => {
    setCart([]);
    setcantidadTotal(0);
  };

  const isInCart = (id) => {
    const currentItem = cart.find((e) => e.item.id === id);

    return currentItem ? true : false;
  };
  return (
    <Cart.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, cantidadTotal }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;
