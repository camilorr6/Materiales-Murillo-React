import Figure from 'react-bootstrap/Figure'
import Counter from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Toast } from "react-bootstrap"




const ItemDetail = ({id,nombre,img,precio,descripcion,stock, setCart})=>{
    const [showToast, setShowToast] = useState(false)
       
    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd=(count)=>{

      addItem({id, nombre, precio, count, descripcion, img})
      setShowToast(true)
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
                      <>
                      <Button variant='primary' style={{margin: '1rem'}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Volver al Catálogo</Link>
                      </Button>
                      <Button variant='primary' style={{margin: '1rem'}} >
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/cart'>Terminar compra</Link>
                      </Button>
                      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="mr-auto">Agregaste un producto al Carrito</strong>
        </Toast.Header>
        <Toast.Body>Agregaste  {nombre}  </Toast.Body>
      </Toast>
      </>
                    ) : (
                      <Counter stock={stock} isInCart={isInCart} nombre={nombre} handleOnAdd={handleOnAdd} />
                    )
                }
          
        </Figure.Caption>
      </Figure>
    )
}

export default ItemDetail