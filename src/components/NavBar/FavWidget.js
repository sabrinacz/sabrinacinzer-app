import React, {useState, useContext, useEffect} from 'react';
import { CartContext } from '../../cartContext/cartContext';

export const FavWidget = () => {

  const {cartCount} = useContext(CartContext);

  return (
    <button className="btn btn-outline ms-auto">
    {cartCount > 0 ? cartCount : ''}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 21a2 2 0 100-4 2 2 0 000 4zM17 21a2 2 0 100-4 2 2 0 000 4zM17 17H6V3H4"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 5l14 1-1 7H6"
      ></path>
    </svg>
    </button>
  )
}

export default FavWidget;
