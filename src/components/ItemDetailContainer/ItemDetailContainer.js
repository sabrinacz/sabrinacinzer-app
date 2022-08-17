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

  const [selectPets, setselectPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // // Promise 
  // useEffect(() => {
  //     if(idPet) {
  //     getData
  //     .then((data) => {setselectPets(data)})
  //     .catch((err) => {console.log(err);})
  //     .finally(() => {setLoading(false);});
  //     };
  //   },[idPet]);

  useEffect(() => {
    if(idPet) {
      getItemsbyId(idPet).then((snapshot) => {
        console.log(snapshot.data());
        setselectPets(snapshot.data());
     })
    .finally(() => {setLoading(false);});
    };
  }, [idPet]);


  let returnedPet = selectPets;
  console.log('selectPets', selectPets)
  console.log('returnedPet', returnedPet)

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
        <ItemDetail returnedPet={returnedPet} idPet={idPet}/> 
      </div>
      )}
      
    </div>
  )
}
export default ItemDetailContainer;
