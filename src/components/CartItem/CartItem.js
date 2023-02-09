import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartItem = ({ id, nombre, precio, img, count, deleteItem }) => {
  return (
    <div>
      <Card style={{ height: '14rem' }}>
        <Card.Header as="h5">{nombre}</Card.Header>
        <Card.Body style={{ display: 'flex' }}>
          <div style={{ width: '100%', marginRight: '10px' }}>
            <Card.Title>${precio} c/u</Card.Title>
            <Card.Text>
              Subtotal={}
            </Card.Text>
            <Button variant="danger" onClick={() => {deleteItem(id)}}>Eliminar Producto</Button>
          </div>
          <Card.Img
            style={{ width: '171px', height: '150px', objectFit: 'cover', marginLeft: 'auto' }}
            src={img}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem