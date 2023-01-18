import { getProducts, getProductsByCategory}  from "../../Asyncmock"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemListContainer(){
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunction= categoryId ?getProductsByCategory : getProducts

        asyncFunction(categoryId)
         .then(products=>{
            setProducts(products)
         })
         .catch(error=>{
            console.log(error)
         })
    }, [categoryId])


    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
        
        
    )

}


export default ItemListContainer