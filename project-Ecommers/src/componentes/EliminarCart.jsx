import React, { useState } from "react";
import Swal from "sweetalert2";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id === id);
    setCarrito(nuevoCarrito);
  };
  return <button onClick={() => eliminarDelCarrito(item.id)}>Borrar</button>;
};
// const EliminarDelCarrito = (id) => {
//   Swal.fire({
//     title: "Seguro quieres eliminar?",
//     showDenyButton: true,
//     confirmButtonText: "Si, eliminar",
//     denyButtonText: `No, no eliminar`,
//   }).then((res) => {
//     console.log(res);
//     if (res.isConfirmed) {
//       item = item.filter((elemento) => elemento.id !== id);
//       //   localStorage.setItem("carrito", JSON.stringify(carrito));
//       tarjJuego(carrito);
//       Swal.fire({
//         title: "eliminado!",
//         icon: "info",
//       });
//     } else if (res.isDenied) {
//       Swal.fire({
//         title: "No se elimina",
//         icon: "info",
//       });
//     }
//   });
// };
export default Carrito;
