import React, {useState, useContext, useEffect} from 'react';
import { cartCount, cart, CartArray, CartContext, CartContextProvider } from '../../CartContext/CartContext';
import CartContainer from '../CartContainer/CartContainer';
import { useParams, NavLink } from 'react-router-dom';

const Cart = () => {
  
  const {cart,cartCount,CartArray,donation,TotalDonation} = useContext(CartContext);

  return (
    <div className='container'>
     <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
      </NavLink>
    <h1>{cartCount} donaciones añadidas</h1>
    
    <CartContainer items={CartArray} key={CartArray.i}/>
    <h1 className='text-right'>Total: ${TotalDonation}</h1>
    
    </div>
  )
}

export default Cart;
