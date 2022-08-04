import {createContext, useContext, useState} from 'react';

//CartArray is an array with my items added to cart
let CartArray = [];

export const CartContext =  createContext();

export const CartContextProvider = ({children, defaultValue}) => { 
  let prevValue = 0;
  const [cart, setCart] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [TotalDonation, setTotalDonation] = useState(prevValue);
  let CartError = "Esta mascota ya fue añadida. Revisá el carrito.";


  console.log('donation is', TotalDonation);

  const addToCart = (returnedPet, donation) => {
    
    const changeDonation = () => {
      setTotalDonation((prevValue) => (prevValue + returnedPet.petDonation));
    } 

    console.log('indexof is', CartArray.indexOf(returnedPet));
    if(CartArray.indexOf(returnedPet) === -1) {
      CartArray.push(returnedPet); 
      changeDonation();
    } else {
      alert(CartError);
    }

    setCartCount(CartArray.length);
    return TotalDonation;
   
  }

  const removeFromCart = (item) => {
    let index = CartArray.indexOf(item);
    console.log('indexof is', index);
    CartArray.splice(index,1)//remove item
  }

  return (
  <CartContext.Provider value={{cart,cartCount,CartArray,TotalDonation,addToCart,removeFromCart}}>
   {/* value is an object that exports two properties, an array and a method*/}
   {children}
  </CartContext.Provider>
  );
}
