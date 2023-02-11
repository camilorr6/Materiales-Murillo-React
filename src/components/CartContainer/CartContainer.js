import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const CartContainer = () =>{


const {cart, getTotalPrice, getSubtotal} = useContext(CartContext)
 
    return(
        <div>
            <h2>Tu Carrito</h2>
            {cart.map(item=><CartItem key={item.id} {...item}  getSubtotal={getSubtotal} />)}
            <h3>El valor total de tu compra es {getTotalPrice()}$ </h3>
            <Button variant='primary' style={{margin: '1rem'}} >
                <Link style={{textDecoration: 'none', color: 'white'}} to='/checkout'>Ir al Checkout</Link>
            </Button>
        </div>
    )
}
export default CartContainer