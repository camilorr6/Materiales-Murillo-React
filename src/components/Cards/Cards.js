import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Cards({id,nombre, img, descripcion}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Link to={`/item/${id}`}><Button variant="primary">Ver Detalle</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;