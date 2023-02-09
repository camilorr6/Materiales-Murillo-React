import { useContext } from "react";
import {CartContext} from "context/CartContext";
import CartItem from "../CartItem/CartItem"

const CartContainer = () =>{


const {cart, deleteItem} = useContext(CartContext)

const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }

    return(
        <div>
            <h2>Tu Carrtito</h2>
            {cart.map(item=><CartItem key={item.id} {...item}  deleteItem={handleRemove}/>)}

        </div>
    )
}
export default CartContainer