import {createContext, useContext} from 'react';

const cartContext = () => {
  createContext(false);
}

export const useCartContext = () => {
  const cartContextValue = useContext(cartContext);
  return cartContextValue;
}

export default cartContext;
