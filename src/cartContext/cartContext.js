import {createContext, useContext, useState} from 'react';


export const CartContext =  createContext()

export const CartContextProvider = ({children, defaultValue}) => { 

  const [cart, setCart] = useState();
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (e) => {
    e.preventDefault();
    setCart('hola');
    setCartCount(cartCount+1);
    console.log(cartCount);
  }

  const removeFromCart = (e) => {
    e.preventDefault();
    setCartCount(cartCount-1);
    console.log(cartCount);
  }

  return (<CartContext.Provider value={{cart,cartCount,addToCart,removeFromCart}}>
   {/* value is an object that exports two properties, an array and a method*/}
   {children}
  </CartContext.Provider>);
}
