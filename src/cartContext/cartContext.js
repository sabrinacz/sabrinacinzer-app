import {createContext, useContext, useState} from 'react';

//CartArray is an array with my items added to cart
let CartArray = [];

export const CartContext =  createContext();

export const CartError = `¡Esta mascota ya está añadida! Actualizamos tu donación. Revisá el carrito.`;

// Inside CartContextProvider
export const CartContextProvider = ({children, defaultValue}) => { 

  const [cart, setCart] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [TotalDonation, setTotalDonation] = useState();
 
  // Calculate the sum of all donations
  const calculateTotalDonation = () => {
    setTotalDonation(CartArray.reduce((n, {petDonation})=> n + petDonation,0 ));
    console.log('cart',CartArray);
    console.log('donationnn is', (CartArray.reduce((n, {petDonation})=> n + petDonation,0 )));
  }   
  
  // When adding to cart, change donation value. If pet is not already in cart push to CartArray and change donation, else, only change donation.
  const addToCart = (returnedPet) => {
    const changeDonation = (prevValue) => {
      (prevValue =! returnedPet.petDonation ? prevValue = returnedPet.petDonation : returnedPet.petDonation );
    } 
    if(CartArray.indexOf(returnedPet) === -1) {
      changeDonation();
      CartArray.push(returnedPet); 
    } else {
      changeDonation();
    } 
    setCartCount(CartArray.length);
  }
  // When removing from cart, find this pet and remove from CartArray.
  const removeFromCart = (item) => {
    let index = CartArray.indexOf(item);
    console.log('indexof is', index);
    CartArray.splice(index,1)//remove item
  }

//Return cart
  return (
  <CartContext.Provider value={{cart,cartCount,CartArray,TotalDonation,setTotalDonation,calculateTotalDonation,CartError,addToCart,removeFromCart}}>
   {/* value is an object that exports two properties, an array and a method*/}
   {children}
  </CartContext.Provider>
  );
}
