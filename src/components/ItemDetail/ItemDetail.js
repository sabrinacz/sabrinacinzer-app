import React, {useContext, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../cartContext/cartContext';

const ItemDetail = ({selectedPet, idPet}) => {
  const { addToCart } = useContext(CartContext);
  
  // Defining selectedPet
  let { id, name, type, age, time, description, pictureUrl, petDonation, petAdded } = selectedPet;
  id = idPet;
  petDonation = 0;

  const [petIsAdded, setpetIsAdded] = useState(false);
  const [sponsor, setSponsor] = useState(false);
  let [donation, setDonation] = useState();

 const confirmDonation = (count) => {
    setDonation(count); 
    selectedPet.petDonation = count;
    setSponsor(true);
  }

  const RemoveDonation = () => {
    setSponsor(false); 
  }

  return (
    <div className="item-detail-container">
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
            <ItemCount selectedPet={selectedPet} idPet={idPet} stock={1000} initial={100} 
            onAdd={confirmDonation}
              />      
            </div>
              :
            <div>
              <p className='text'><strong>Elegiste ${donation} para {name}</strong></p>

              <div id="ifPetAdded">
              {  selectedPet.petAdded === true ? 
              <div className="message alert-success">¡Gracias! Esta donación está en el carrito. <Link to="/cart">Revisá el carrito.</Link></div>
              : 
              <p></p>
               }
              </div>

              <div id="addtocart-section"> 
              <Link to={``}
                className="mt-2 btn btn-secondary"
                onClick={()=>RemoveDonation(donation)}>Volver atrás
              </Link>
              { selectedPet.petAdded === true ? 
               <span className='cursor-not-allowed'>
                <Link to={``} 
                      className='mt-2 btn btn-primary disabled'
                      onClick={(e)=> {
                        e.preventDefault();
                        }}>
                 Añadir donación
                </Link></span>
              : 
              <Link to={``} 
                    className='mt-2 btn btn-primary'
                    onClick={(e)=> {
                    e.preventDefault();
                    addToCart(selectedPet,idPet);
                    }
                    }>
                    Añadir donación
                    </Link>
              }
           
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