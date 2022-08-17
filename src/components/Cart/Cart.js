import React, {useState, useContext, useEffect} from 'react';
import { cartCount, cart, CartArray, CartContext, CartContextProvider } from '../../cartContext/cartContext';
import CartContainer from '../CartContainer/CartContainer';
import { useParams, NavLink } from 'react-router-dom';

const Cart = () => {
  
  const {cart,cartCount,CartArray,donation,TotalDonation,calculateTotalDonation} = useContext(CartContext);

  calculateTotalDonation();

  if(cartCount === 0) {
    return (
      <div className='container'>
     <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
      </NavLink>
      <h3 className='mt-5'>No hay items en el carrito</h3>
      </div>
    )
  }

  return (
    <div className='container'>
     <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
      </NavLink>

  
    <h3 className='mt-5'>{cartCount} donaciones añadidas</h3>
     
    <CartContainer items={CartArray}/> 
    <h1 className='text-right'>Total: ${TotalDonation}</h1>
    
    </div>
  )
}

export default Cart;
