import React, {useState, useEffect, useContext} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../mockapi/pets';
import "../../styles.css";
import { CartContext } from '../../cartContext/cartContext';
import { db, getItemsbyId} from '../../firebase.js';
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';
import Cart from '../Cart/Cart';


const ItemDetailContainer = () => {
  const { CartArray } = useContext(CartContext);
  const {id} = useParams();
  let idPet = id;

  
  const [petState, setPetState] = useState();
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

  let checkPet = (CartArray, selectedPet) => {
    if (CartArray.some(({id})=> id === idPet)) {
    selectedPet.petAdded = true;
    return selectedPet.petAdded;
   }}

   selectedPet.petAdded = checkPet(CartArray, selectedPet);

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
