import React from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'; // it's a custom, personalized hook, that separates the logic from our interface

const ItemDetail = ({ pet, i, self }) => {
  let params = useParams();
  console.log(params);
  
  return (
    <div class="pet_card_detail">
      {params.id}
    </div>
  )
}

export default ItemDetail;