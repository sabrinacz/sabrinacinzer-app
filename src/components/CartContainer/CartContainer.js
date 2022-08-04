import React, {useContext, useEffect} from 'react';
import { CartArray, CartContext, CartContextProvider } from '../../CartContext/CartContext';

const CartContainer = ({items}) => {
    const {removeFromCart} = useContext(CartContext);

  return (
    <div className="cart">
    {items.map((item, i)=> 
    (
    <div className="cart-card item-detail row">
        <h3 className="col-2">{item.name}</h3>
        <div className="col picture-container">
            <img src={item.pictureUrl} alt="{name}"/>
        </div>
        <div className="col text-md-end donationamount">
            ${item.petDonation}
            <button 
            onClick={(e)=>{
                e.preventDefault();
                removeFromCart(item)
                }}
            className="mx-2 btn btn-secondary">Eliminar
            </button>
        </div>
    </div>
    
    
    ))
    } 
    </div>
  )
}

export default CartContainer;