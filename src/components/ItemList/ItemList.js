import Cards from "../Cards/Cards"
const ItemList = ({products}) =>{
    return(
    <div>
        {products.map(prod=><Cards key={prod.id} {...prod}/>)}
    </div>)
}
export default ItemList