import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CarritoComponent as CartContext } from "../context/CartProvider";

const CarritoComponent = () => {
  const { eliminarCart } = useContext(CartContext);

  // Función para confirmar y eliminar un elemento del carrito
  const confirmarEliminar = (id) => {
    Swal.fire({
      title: "¿Seguro quieres eliminar?",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((res) => {
      if (res.isConfirmed) {
        eliminarDelCarrito(id); // Usar función del contexto
        Swal.fire({
          title: "¡Eliminado!",
          icon: "info",
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "No se elimina",
          icon: "info",
        });
      }
    });
  };

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {carrito.map((elemento) => (
          <li key={elemento.id}>
            {elemento.nombre} - ${elemento.precio}
            <button onClick={() => confirmarEliminar(elemento.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarritoComponent;
