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

    const deleteItem = (id) => {
      setCart(cart.filter(item => item.id !== id))

    }
      
    const getTotalQuantity =()=>{
        let tot = 0

        cart.forEach(prod =>{
            tot += prod.count
        })
        return tot
    }

    const totalQuantity = getTotalQuantity()

    const clearCart= ()=>{
      setCart([])
    }

    const getSubtotal = id => {
      const item = cart.find(item => item.id === id)
      return item ? item.precio * item.count : 0
    };
    

    const getTotalPrice = () => {
      if (cart.length === 0) {
        return 0
      }
      let total = 0
      cart.forEach(item => {
        total += item.precio * item.count;
      });
      return total
    };
  
    const total=getTotalPrice()


    return(
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, cart, deleteItem, setCart,getTotalPrice, getSubtotal, total, clearCart}}>
            {children}
        </CartContext.Provider>
        
    )

}
