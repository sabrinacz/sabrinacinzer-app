import React from 'react';


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
        <a class="btn btn-primary" href={"/" + id}>Ver detalle</a>
    </div>
  )
}

export default Item;