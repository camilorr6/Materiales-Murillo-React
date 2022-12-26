import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {
    return (
    <>
      <Button  style={{ backgroundColor: '#003049', borderColor:'#003049', padding:'1rem'}} href="#">
       <AiOutlineShoppingCart />
       <span class="badge badge-pill badge-light">80</span>
      </Button> 
    </>

);
}

export default CartWidget;