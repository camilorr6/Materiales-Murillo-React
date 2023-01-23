import { getProducts, getProductsByCategory}  from "../../Asyncmock"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
            .then((products) => {
                setProducts(products);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
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