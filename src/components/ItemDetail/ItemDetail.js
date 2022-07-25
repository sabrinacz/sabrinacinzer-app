import React from 'react';
import Item from '../Item/Item';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

const ItemDetail = ({returnedPet, idPet}) => {
  console.log("ItemDetail is", returnedPet, idPet);

  const { id, name, type, age, time, description, pictureUrl } = returnedPet;

  function onAddCallback(n) {
    console.log(`Agregaste a favoritos`);
  }

  return (
    <div className="item-detail-container container">
      <div className="column">
        <h1>Hola, soy {name}</h1>
        {/* {pet.map((pet,id)=> {
                return <Item 
                pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>
        })}   */}
        <div className="item-detail row">
          <div className="col col-lg-5 picture-container">
            <img src={pictureUrl} alt="{name}"/>
          </div>
          <div className="col col-lg-7 description-container">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{age} {time}</p>
            <Link to={``}
                className="btn btn-primary" 
                onClick={onAddCallback()}>Agregar a favoritos
                </Link>
          </div>
        </div>

         
      </div>
      <h3></h3>
      <p></p>
      <p></p>
    </div>
  );
};

export default ItemDetail;