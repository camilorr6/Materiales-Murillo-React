import { useParams } from "react-router-dom"
import { getProductById } from "../../Asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailConatiner = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    
    
    useEffect(() => {
    console.log("productId inside useEffect: ", productId);
        getProductById(Number (productId))
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productId]);
    console.log("product: ", product);

    return(
        
        <div >
            <h2>Detalle del producto</h2>
            <ItemDetail {...product} />

        </div>
       
    )
}

export default ItemDetailConatiner