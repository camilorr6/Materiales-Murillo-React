import React, { useContext, useState } from "react"
import {  Button, Spinner } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc  } from "firebase/firestore"
import {db} from "../../services/Firebase/firebaseConfig"
import { Link } from "react-router-dom"
import BuyerForm from "../BuyerForm/BuyerForm"

const Checkout = () => {
  const { cart, total , clearCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)

  const createOrder = async (name, phone, email) => {
    setLoading(true)

    try{
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total
      }
  
      const batch = writeBatch(db)
  
      const ids = cart.map(prod => prod.id)
  
      const productRef = query(collection(db, "products"), where(documentId(), "in", ids))
  
      const productsAddedToCartFromFirestore = await getDocs(productRef)
      const { docs } = productsAddedToCartFromFirestore
  
  
      const outOfStock = []
  
      docs.forEach(doc=>{
        const dataDoc= doc.data()
        const stockDb = dataDoc.stock
  
        const productAddedTocart = cart.find(prod=> prod.id === doc.id)
        const prodQuantity = productAddedTocart.count
  
        if(stockDb >= prodQuantity){
            batch.update(doc.ref, {stock: stockDb - prodQuantity})
        } else{
            outOfStock.push({id: doc.id, ...dataDoc})
        }
      })
      if(outOfStock.length === 0){
        await batch.commit()
  
        const orderRef = collection (db, "orders")
  
        const orderAdded = await addDoc(orderRef, objOrder)
  
        const {id}= orderAdded

        setOrderId(id)

        clearCart()

        console.log(objOrder)
        
    } else{
      console.error("hay productos fuera de stock")
    }
  
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

         
      }

      if(loading){
        return(
          <div>
            <h1>Generando Orden</h1>
            <Spinner></Spinner>
          </div>
        )
      }

      if(orderId){
        return(
          <div>
            <h1>¡La orden  {orderId} fue generada con exito!</h1>
            <Button variant='primary' style={{margin: '1rem'}}>
              <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Volver al Catálogo</Link>
            </Button>
          </div>
        )
      }
      
      if(cart.lenght === 0){
        return(
          <Button variant='primary' style={{margin: '1rem'}}>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Volver al Catálogo</Link>
          </Button>
        )
      }

  return (
    <div>
      <h1>Checkout</h1>
      <BuyerForm onGenerateOrder={createOrder}/>
    </div>
  );
};

export default Checkout
