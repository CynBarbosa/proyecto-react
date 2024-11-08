import React from "react";

const OrderLista = ({ orders }) => {
  return (
    <div className="container1">
      {orders.map((order) => {
        return (
          <div className="container">
            <h1>{order.id}</h1>
            <h2>{order.name}</h2>
            <p>{order.title}</p>
            <span>${order.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default OrderLista;
