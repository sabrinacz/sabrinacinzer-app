import React from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'; // it's a custom, personalized hook, that separates the logic from our interface

const ItemDetail = ({pet}) => {
  console.log("returnedpet", pet);

  return (
    <div>
      <h1>Detalle</h1>
      <div className="picture-container">
        <img src="" alt="{name}"/>
      </div>
      <h3></h3>
      <p></p>
      <p></p>
    </div>
  );
};

export default ItemDetail;