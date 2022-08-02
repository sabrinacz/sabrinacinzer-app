import React, {useContext, useEffect} from 'react';
import cartContext from '../../cartContext/cartContext';

const Cart = () => {
  
  const AllContextValue = useContext(cartContext);

  return (
    <h1>Cart</h1>
  )
}

export default Cart;
