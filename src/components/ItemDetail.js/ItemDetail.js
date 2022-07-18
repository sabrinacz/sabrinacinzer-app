import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({ pet, id, self }) => {
  const { id, name, type, age, time, description, pictureUrl } = pet[1];
  return (
    <div class="pet_card_detail">

        <div class="picture-container">
          <img src={pictureUrl} alt="{name}"/>
        </div>  
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{description}</p>
        <p>{age} {time}</p>
    </div>
  )
}

export default ItemDetail;