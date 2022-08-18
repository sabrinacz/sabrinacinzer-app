import React, {useContext } from 'react';
import { CartContext } from '../../cartContext/cartContext';
import { Link } from 'react-router-dom';


const CartContainer = ({items}) => {
    const {removeFromCart} = useContext(CartContext);
    
  return (
    <div className="cart">
    {items.map((item, i)=> 
    (
    <div className="cart-card item-detail row">
        
        <h3 className="col-2">
            <Link to={`/pet/${item.id}`} className="text-decoration-none text-black">{item.name} </Link>
       </h3>

        <Link to={`/pet/${item.id}`} className="col text-decoration-none text-black">
        <div className="picture-container">
            <img src={item.pictureUrl} alt="{name}"/>
        </div>
        </Link>

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