import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ pet }) => {
  const { id, name, type, age, time, description, pictureUrl } = pet;
  return (
    <div class="pet_card">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{description}</p>
        <p>{age} {time}</p>
        <div class="picture-container">
          <img src={pictureUrl} alt="{name}"/>
        </div>
        <Link class="btn btn-primary" to={"pet/" + id}>Ver detalle</Link>
    </div>
  )
}

export default Item;