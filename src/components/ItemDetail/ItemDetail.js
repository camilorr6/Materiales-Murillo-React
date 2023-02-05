import Figure from 'react-bootstrap/Figure';
import Counter from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";



const ItemDetail = ({id,nombre,img,precio,descripcion,stock, setCart})=>{
    
    const [count,setCount] = useState(0)

    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd=(count)=>{
      
      setCount(parseInt(count))

      addItem({id, nombre, precio, count})
      console.log(id)
    }


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
          {
                    isInCart(id) ? (
                      <Button variant='primary'>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/cart'>Terminar compra</Link>
                      </Button>
                    ) : (
                      <Counter stock={stock} isInCart={isInCart} nombre={nombre} handleOnAdd={handleOnAdd} />
                    )
                }
          
        </Figure.Caption>
      </Figure>
    )
}

export default ItemDetail