import { createContext, useState } from "react"
export const CartContext = createContext()


export const CartProvider= ({children})=>{

    const [cart, setCart]= useState([])

    const addItem = (productToAdd)=> {
        if (!isInCart(productToAdd.id)){
          setCart(prev=>{
            return[...prev, productToAdd ]
          })        
        } else{
          console.error("Ya esta agregado")
        }
       
      }
    
    const isInCart=(id)=> cart.some(prod => id === prod.id)

    const deleteItem = (productToDelete)=>{
      console.log(productToDelete)
     
      setCart(cart.filter(i=>i !== productToDelete.id))
      console.log(cart)
    }
      
    const getTotalQuantity =()=>{
        let tot = 0

        cart.forEach(prod =>{
            tot += prod.count
        })
        return tot
    }

    const totalQuantity = getTotalQuantity()

/*     const getSubtotal=(item)=>{
      let subTot=0

      subTot= item.count * item.precio

      return subTot
    }

    const subtotalItem = getSubtotal() */

    return(
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, cart, deleteItem}}>
            {children}
        </CartContext.Provider>
        
    )

}