import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const OrderSummary = ({ order, open, onClose }) => {
  if (!order) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          color: "black",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Resumen de la Orden
        </Typography>

        <Typography variant="body1">
          <strong>Usuario:</strong> {order.user.name}
        </Typography>
        <Typography variant="body1">
          <strong>Fecha:</strong>{" "}
          {new Date(order.timestamp?.seconds * 1000).toLocaleString()}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Productos:</strong>
        </Typography>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              {product.item.name} - Cantidad: {product.quantity} - Precio: $
              {product.item.price}
            </li>
          ))}
        </ul>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Volver al inicio
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderSummary;
