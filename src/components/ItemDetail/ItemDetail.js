import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({returnedPet, idPet}) => {
  console.log("ItemDetail is", returnedPet, idPet);

  const { id, name, type, age, time, description, pictureUrl } = returnedPet;

  const [donation, setDonation] = useState();

  function AddFavorite(e) {
    //recibe por parametro a ItemCount
    alert(`Agregaste a favoritos`);
  }

  const AddDonation = (donation) => {
    setDonation(donation);
    alert(`Gracias por donar $${donation}`)
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
            <p><strong>Seleccioná un monto y apadriná a {name}</strong><br/>(Entre $100 y $1000)</p>
            <ItemCount stock={1000} initial={100} onAdd={AddDonation} /> 
            {/* get the value with an onadd, it will modify onchange, save it in a state */}

            <Link to={`/favorites`}
                className="mt-2 btn btn-primary" 
                onClick={AddFavorite}>Agregar a favoritos
            </Link>
          </div>
        </div>

         
      </div>
    </div>
  );
};

export default ItemDetail;