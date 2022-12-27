function Usuario(props){
    return(
        <span>{props.name}</span>
    )
    
}

function ItemListContainer(){
    return (
        <h1> Bienvenido <Usuario name="Camilo"/>!</h1>
    )

}


export default ItemListContainer