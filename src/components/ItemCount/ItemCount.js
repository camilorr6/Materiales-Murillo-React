import React, { useState } from 'react';
import { Button, Toast } from "react-bootstrap";

const Counter = ({ stock, nombre, handleOnAdd }) => {
  const [count, setCount] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setShowToast(true);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      
      <Button onClick={handleDecrement } variant="outline-primary" className="me-2">-</Button>
      <span className="me-2">{count}</span>
      <Button onClick={handleIncrement} variant="outline-primary" className="me-2">+</Button>
      <Button onClick={() => {
          setShowToast(true);
          handleOnAdd(count)
      }} variant="outline-success">Agregar al carrito</Button>

      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="mr-auto">Agregaste un producto al Carrito</strong>
        </Toast.Header>
        <Toast.Body>Agregaste {count} {nombre}  </Toast.Body>
      </Toast>
    </div>
  );
};

export default Counter;