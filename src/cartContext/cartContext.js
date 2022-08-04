import {createContext, useContext, useState} from 'react';

//CartArray is an array with my items added to cart
let CartArray = [];

export const CartContext =  createContext();
export const CartError = `¡Esta mascota ya está añadida! Actualizamos tu donación. Revisá el carrito.`;

export const CartContextProvider = ({children, defaultValue}) => { 
  let prevValue = 0;
  const [cart, setCart] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [TotalDonation, setTotalDonation] = useState(prevValue);

  console.log('donation is', TotalDonation);

  const addToCart = (returnedPet) => {
    const changeDonation = (prevValue) => {
      (prevValue =! returnedPet.petDonation ? prevValue = returnedPet.petDonation : returnedPet.petDonation );
    } 
    console.log('indexof is', CartArray.indexOf(returnedPet));
    if(CartArray.indexOf(returnedPet) === -1) {
      changeDonation();
      CartArray.push(returnedPet); 
    } else {
      changeDonation();
    } 
    setCartCount(CartArray.length);
  }

  const removeFromCart = (item) => {
    let index = CartArray.indexOf(item);
    console.log('indexof is', index);
    CartArray.splice(index,1)//remove item
  }

  return (
  <CartContext.Provider value={{cart,cartCount,CartArray,TotalDonation,CartError,addToCart,removeFromCart}}>
   {/* value is an object that exports two properties, an array and a method*/}
   {children}
  </CartContext.Provider>
  );
}
