import React, {useContext, useEffect} from 'react';
import {CartContext, CartContextProvider} from '../../CartContext/CartContext';

const Cart = () => {
  
  const {cartCount} = useContext(CartContext);

  return (
    <h1>{cartCount} donaciones añadidas</h1>
  )
}

export default Cart;
