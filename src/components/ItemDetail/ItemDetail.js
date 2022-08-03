import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const ItemDetail = ({returnedPet, idPet}) => {
  const {addToCart} = useContext(CartContext);

  const { id, name, type, age, time, description, pictureUrl } = returnedPet;

  const [donation, setDonation] = useState();
  const [sponsor, setSponsor] = useState(false);

  function AddFavorite(e) {
    //recibe por parametro a ItemCount
    alert(`Agregaste a favoritos`);
  }

  const AddDonation = (donation) => {
    setDonation(donation);
    setSponsor(true);
    return donation;
  }

  const RemoveDonation = (donation) => {
    setSponsor(false);
    console.log(`Donación de $${donation} eliminada`)
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
          <div>
            {/* If user sponsors, show them button to go to sponsored pets */}
            {!sponsor
            ?
            <div>
            <p><strong>Seleccioná un monto y apadriná a {name}</strong><br/>(Entre $100 y $1000)</p>
            <ItemCount stock={1000} initial={100} onAdd={AddDonation} />      
            </div>
              :
            <div>
              <p><strong>¿Estás seguro/a que querés donar un monto de ${donation} para apadrinar a {name}?</strong></p>
              <Link to={``}
                className="mt-2 btn btn-secondary"
                onClick={()=>RemoveDonation(donation)}>Volver atrás
              </Link>
              <Link to={``} 
                className="mt-2 btn btn-primary"
                onClick={addToCart}>
                  Añadir donación
              </Link>
            </div>
            }
          </div>
        </div>

         
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;