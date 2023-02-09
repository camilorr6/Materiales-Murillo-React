import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const Counter = ({ stock, nombre, handleOnAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
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
          
          handleOnAdd(count)
          
      }} variant="outline-success">Agregar al carrito</Button>

      
    </div>
  );
};

export default Counter;