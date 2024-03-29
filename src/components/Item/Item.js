import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ pet }) => {
  const { id, name, type, age, time, description, pictureUrl } = pet;
  return (
    <div className="pet-card">
        <Link to={`/pet/${pet.id}`} className="text-decoration-none text-black">
          <div className="picture-container">
          <img src={pictureUrl} alt="{name}"/>     
        </div>
        </Link>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{age} {time}</p>
        <Link className="btn btn-primary" 
              to={`/pet/${id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item;