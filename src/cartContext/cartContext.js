import {createContext, useEffect, useState} from 'react';


export const CartContext =  createContext();

// Inside CartContextProvider
export const CartContextProvider = ({children}) => { 

  //on update pets, set the state
  const [pets, setPets] = useState([]);
  useEffect(() => {
    setPets(pets);
  }, [pets])

  //CartArray is an array with my items added to cart
  const [cart, setCart] = useState();
  const [CartArray, setCartArray] = useState([]);
  const [orderArray, setOrderArray] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [TotalDonation, setTotalDonation] = useState();
  console.log(CartArray)

  const [donation, setDonation] = useState();

  // Calculate the sum of all donations
  const calculateTotalDonation = () => {
    setTotalDonation(CartArray.reduce((n, {petDonation})=> n + petDonation,0 ));
  }   
  
  // When adding to cart, change donation value. 
  // If pet is not already in cart push to CartArray and change donation, else, only change donation.  
  const addToCart = (selectedPet,idPet) => {
    const changeDonation = (prevValue) => {
      (prevValue =! selectedPet.petDonation ? prevValue = selectedPet.petDonation : selectedPet.petDonation );
    } 
    if(CartArray.indexOf(selectedPet) === -1) {
      selectedPet.id = idPet;
      selectedPet.petAdded = true;
      CartArray.push(selectedPet);  
      changeDonation();
    }else {
      changeDonation();
    }
    setCartCount(CartArray.length);
  }
  // When removing from cart, find this pet and remove from CartArray.
  const removeFromCart = (item) => {
    let index = CartArray.indexOf(item);
    CartArray.splice(index,1)//remove item
    item.petAdded = false;
    setCartCount(CartArray.length);
  }

   //Update CartArray pet donation amount when donation selected changes
  // useEffect(() => {
  //   setDonation(donation);
  //   let petFoundInArray = CartArray.find(x => x.id === id);
  //   let petDonation = 0;
  //   petFoundInArray.petDonation = donation;
  // }, [donation])

  const updateDonation = (selectedPet,idPet,count) => {
    let petFoundInArray = CartArray.find(x => x.id === idPet);
    if (petFoundInArray != '') {
      petFoundInArray.petDonation = count;
      console.log(petFoundInArray, petFoundInArray.petDonation, count)
    }
  }

//Return cart
  return (
  <CartContext.Provider value={{cart,cartCount,CartArray,setCartArray,orderArray, setOrderArray,TotalDonation,setTotalDonation,calculateTotalDonation,updateDonation, addToCart,removeFromCart}}>
   {/* value is an object that exports two properties, an array and a method*/}
   {children}
  </CartContext.Provider>
  );
}
