import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget({totalQuantity}) {
    return (
    <>
      <Button  style={{ backgroundColor: '#003049', borderColor:'#003049', padding:'1rem'}}>
       <AiOutlineShoppingCart />
       <span className="badge badge-pill badge-light">{totalQuantity} </span>
      </Button> 
    </>

);
}

export default CartWidget;