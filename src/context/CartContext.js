import { createContext, useState } from "react"
export const CartContext = createContext()


export const CartProvider= ({children})=>{

    const [cart, setCart]= useState([])
    console.log(cart)

    const addItem = (productToAdd)=> {
        if (!isInCart(productToAdd.id)){
          setCart(prev=>{console.log(prev)
            return[...prev, productToAdd ]
          })        
        } else{
          console.error("Ya esta agregado")
        }
       
      }
    
      const isInCart=(id)=> cart.some(prod => id === prod.id)
      
    const getTotalQuantity =()=>{
        let tot = 0

        cart.forEach(prod =>{
            tot += prod.count
        })
        return tot
    }

    const totalQuantity = getTotalQuantity()

    

    return(
        <CartContext.Provider value={{addItem, isInCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
        
    )

}