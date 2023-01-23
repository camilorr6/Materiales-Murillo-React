import Cards from "../Cards/Cards"


const ItemList = ({products}) =>{
    return(
    <div style={{ display: "flex", flexWrap:"wrap", padding:'1rem', justifyContent: "space-around"}}>
        {products.map(prod=><Cards key={prod.id} {...prod}/>)}
    </div>)
}
export default ItemList