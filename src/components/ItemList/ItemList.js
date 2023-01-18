import Cards from "../Cards/Cards"
const ItemList = ({products}) =>{
    <div>
        {products.map(prod=>console.log(prod.id))}
    </div>
}
export default ItemList