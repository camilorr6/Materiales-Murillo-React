import { getProducts, getProductsByCategory}  from "../../Asyncmock"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";
import {getDocs} from "firebase/firestore"
import {db} from "../../services/Firebase/firebaseConfig"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        
        setIsLoading(true);
        
    const collectionRef = (db, 'products')

        getDocs(collectionRef).then(response=>{console.log(response)})
    }, [categoryId]);

    return (
        <div>
            <h1>Listado de productos</h1>
            {isLoading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}

export default ItemListContainer;