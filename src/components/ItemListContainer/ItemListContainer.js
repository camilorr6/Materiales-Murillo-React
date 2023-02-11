import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import{getProducts} from "../../services/Firebase/firestore/products.js"
import useAsync from "../../hooks/useAsync"
import { useTitle } from "../../hooks/useTitle"




function ItemListContainer() {

    useTitle("Todos los productos", [])

    const { categoryId } = useParams();

    const getProductsWithCategory=()=>getProducts(categoryId)

    const {data:products,loading} = useAsync(getProductsWithCategory, [categoryId])

    return (
        <div>
            <h1>Listado de productos</h1>
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}

export default ItemListContainer;