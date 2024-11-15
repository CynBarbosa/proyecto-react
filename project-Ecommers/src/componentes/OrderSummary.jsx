import React from "react";

const OrderSummary = ({ order }) => {
  if (!order) return <p>No hay orden generada aún.</p>;

  return (
    <div className="order-summary">
      <h2>Resumen de la Orden</h2>
      <p>
        <strong>ID de la orden:</strong> {order.id}
      </p>
      <p>
        <strong>Fecha de la orden:</strong>{" "}
        {order.timestamp?.toDate().toString()}
      </p>
      <h3>Productos</h3>
      <ul>
        {order.products.map((product, index) => (
          <li key={index}>
            {product.item.title} - Cantidad: {product.quantity} - Precio: $
            {product.item.price * product.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total:</strong> $
        {order.products.reduce(
          (total, product) => total + product.item.price * product.quantity,
          0
        )}
      </p>
    </div>
  );
};

export default OrderSummary;
