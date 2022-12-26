import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {
    return (
    <>
      <Button href="#">
       <AiOutlineShoppingCart />
       <span class="badge badge-pill badge-light">80</span>
      </Button> 
    </>

);
}

export default CartWidget;