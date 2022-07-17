import React from 'react';


const Item = ({ id, name, type, age, time, description, pictureUrl }) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{description}</p>
        <p>{age} {time}</p>
        <img src="{pictureUrl}" alt="{name}"/>
    </div>
  )
}

export default Item;