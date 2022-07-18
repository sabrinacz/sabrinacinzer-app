import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "../styles.css";

const Main = () => {
  return (
    <div>      
      <ItemListContainer greeting = {"¡Bienvenido/a a Patitas!"} />
    </div>
  )
}

export default Main;