import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getDoc, doc} from "firebase/firestore"
import {db} from "../../services/Firebase/firebaseConfig"
import { Spinner } from "react-bootstrap"



const ItemDetailConatiner = ({setCart}) => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)

    
    
    useEffect(() => {

        const docRef = doc(db, "products", productId)
        getDoc(docRef).then( response =>{
            const productAdapted = {id: response.id, ...response.data()}
            setProduct(productAdapted)
        }).catch(error=>{
            console.log( error)
        }).finally(()=>{
            setLoading(false)
        })

    }, [productId]);

    return(
        
        <div >
            <h2>Detalle del producto</h2>
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <ItemDetail {...product} setCart={setCart} />
            )}
            

        </div>
       
    )
}

export default ItemDetailConatiner