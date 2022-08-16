import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../cartContext/cartContext';

const ItemDetail = ({returnedPet}) => {
  const { addToCart, CartError, CartArray, TotalDonation, calculateTotalDonation } = useContext(CartContext);
  let { id, name, type, age, time, description, pictureUrl, petDonation } = returnedPet;

  const [donation, setDonation] = useState();
  const [sponsor, setSponsor] = useState(false);
  const [petAdded, setPetAdded] = useState(false);

  const ConfirmDonation = (donation) => {
    setDonation(donation);  
    setSponsor(true);
    return returnedPet.petDonation = donation;
  }

  const RemoveDonation = (donation) => {
    setSponsor(false);
  }

  let checkPet = () => {
   if (CartArray.includes(returnedPet)) { 
    setPetAdded(true);
  }}

  return (
    <div className="item-detail-container container">
      <div className="column">
        <h1>Hola, soy {name}</h1>
  
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
            <ItemCount stock={1000} initial={100} onAdd={ConfirmDonation} checkPet={checkPet}/>      
            </div>
              :
            <div>
              <p className='text-success'><strong>Elegiste un monto de ${petDonation} para apadrinar a {name}</strong></p>
              <div id="addtocart-section"> 
              <Link to={``}
                className="mt-2 btn btn-secondary"
                onClick={()=>RemoveDonation(donation)}>Volver atrás
              </Link>
              {petAdded ? 
               <span className='cursor-not-allowed'>
                <Link to={``} 
               className='mt-2 btn btn-primary disabled'>
                 Añadir donación
                </Link></span>
              : 
              <Link to={``} 
                    className='mt-2 btn btn-primary'
                    onClick={(e)=> {
                    e.preventDefault();
                    addToCart(returnedPet);
                    }
                    }>
                    Añadir donación
                    </Link>
              }

              <p id="ifPetAdded">
              {petAdded ? 
              <p className="error-message">{CartError}</p>
              : 
              <p></p>
               }
              </p>
              </div>
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