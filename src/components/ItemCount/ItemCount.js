import { useState } from "react"
import Button from 'react-bootstrap/Button';

const ItemCount= ({initial = 1, stock})=>{

    let aumentarCantidad = ()=>{
        if(count < stock){
            setCount(prev=>prev + 1)
        }
        

    
    }
    
    let reducirCantidad = () =>{
        if(count>1){
            setCount(prev=>prev - 1)
        }
        
        
    
    }
    

    const [count,setCount] = useState(initial)
    return(
        <div class="col-2 d-flex">
          <Button onClick={reducirCantidad}variant="outline-primary">-</Button>
          <div>{count}</div>                      
          <Button onClick={aumentarCantidad}variant="outline-primary">+</Button>
          <Button variant="primary">Agregar al Carrito</Button>
        </div>
    )
}
export default ItemCount
