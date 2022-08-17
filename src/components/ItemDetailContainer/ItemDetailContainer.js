import React, {useState, useEffect} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../mockapi/pets';
import "../../styles.css";
import { db, getItemsbyId} from '../../firebase.js';
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const {id} = useParams();
  let idPet = id;

  const [selectedPet, setselectedPet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(idPet) {
      getItemsbyId(idPet).then((snapshot) => {
        idPet = snapshot.id;
        setselectedPet(snapshot.data());
     })
    .finally(() => {setLoading(false);});
    };
  }, [idPet]);

  return (
    <div>
        <NavLink to={"/category/"}
              className={"breadcrumb-link"}>
              Volver a todos los rescatados
        </NavLink>

      {loading ? (
      <div className="item-list-container">
        <div className="loading-items"> Cargando... </div>
      </div>
      ) : (
      <div>
        <ItemDetail selectedPet={selectedPet} idPet={idPet}/> 
      </div>
      )}
      
    </div>
  )
}
export default ItemDetailContainer;
