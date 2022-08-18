import React, { useContext } from 'react';
import { CartContext } from '../../cartContext/cartContext';
import CartContainer from '../CartContainer/CartContainer';
import { NavLink, Link } from 'react-router-dom';

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
      <h3 className='mt-5'>No hay donaciones en el carrito</h3>
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
     
    <CartContainer items={CartArray} key={CartArray.id}/> 
    <h1 className='text-right'>Total: ${TotalDonation}</h1>
    <Link to={''} className="btn btn-primary">Pagar</Link>
    
    </div>
  )
}

export default Cart;
