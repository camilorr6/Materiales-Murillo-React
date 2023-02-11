import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

function Cards({id,nombre, img, descripcion}) {


  return (
    <Card style={{ width: '18rem'}} className="mb-3">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + img} />
      <Card.Body>
      <Card.Title style={{ whiteSpace: "wrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", lineHeight: "1.2", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>{nombre}</Card.Title>
      <Card.Text style={{display: "-webkit-box", WebkitLineClamp: "4", overflow: "hidden", textOverflow: "ellipsis", WebkitBoxOrient: "vertical"}}>
          {descripcion}
        </Card.Text>
        <Link to={`/item/${id}`}><Button style={{ backgroundColor: '#003049', borderColor:'#003049', padding:'1rem'}} variant="primary bottom">Ver Detalle</Button></Link>
      </Card.Body>
    </Card>


  );
}

export default Cards;