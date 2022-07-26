import React from 'react';
import donationCount from '../components/donationCount/donationCount';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "../styles.css";

const Main = (greeting) => {
  greeting = "¡Bienvenido/a a Patitas!";
  return (
    <div>      
      <h1>{greeting}</h1> 
      <donationCount 
        stock={0} 
        initial={50} 
        onAdd={(n) => alert(`Gracias por donar $${n}`)} />
      {/* <ItemListContainer greeting = {"¡Bienvenido/a a Patitas!"} /> */}
    </div>
  )
}

export default Main;