import React, {useState, useEffect} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../mockapi/pets';
import "../../styles.css";


const ItemDetailContainer = ({}) => {

  const {id} = useParams();
  let idPet = id;
  console.log("The selected id is", idPet);
  // const {id} = useParams();
  // // filter data to get informations based on props "title"
  // const profile = Data.filter(pets => pets.id === title);

  const [selectPets, setselectPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Promise 
  useEffect(() => {
      if(idPet) {
      getData
      .then((data) => {setselectPets(data)})
      .catch((err) => {console.log(err);})
      .finally(() => {setLoading(false);});
      };
    },[]);

  function getPet (pets, idPet) {
    pets.filter( pets => pets.id === idPet);
    let pet = pets[idPet-1]
    return pet;
  }

  let returnedPet = (getPet(selectPets, idPet));

  console.log("Returned pet is", returnedPet, "with id", idPet );

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
