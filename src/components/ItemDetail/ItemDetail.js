import Figure from 'react-bootstrap/Figure';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id,nombre,img,precio,descripcion,stock})=>{
    
    return(
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt={nombre}
          src={img}
        />
        <Figure.Caption>
          <h2>{nombre}</h2>
          <h4>${precio}</h4>
          <p>{descripcion}</p>
          <ItemCount stock={stock}/>
        </Figure.Caption>
      </Figure>
    )
}

export default ItemDetail