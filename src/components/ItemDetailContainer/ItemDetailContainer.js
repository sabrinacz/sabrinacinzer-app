import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../mockapi/pets';
import "../../styles.css";


const ItemDetailContainer = ({}) => {

  const {id} = useParams();
  console.log("Los params del detail son", id);
  let idPet = id;
  console.log(idPet)
  // const {id} = useParams();
  // // filter data to get informations based on props "title"
  // const profile = Data.filter(pets => pets.id === title);

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Promise 
  useEffect(() => {
      getData
      .then((data) => {setPets(data);})
      .catch((err) => {console.log(err);})
      .finally(() => {setLoading(false);},100);
      }, 
  []);

  console.log("Pets", pets );

  function getPet (pets, idPet) {
    pets.filter( pets => pets.id === idPet);
    let pet = pets[idPet-1]
    return pet;
  }

  let returnedPet = (getPet(pets, idPet));

  console.log("El pet es", getPet(pets, idPet), "con id", idPet );

  return (
    <div>
        <h1> hola </h1>
        <ItemDetail pet={returnedPet}/> 
    </div>
  )
}
export default ItemDetailContainer;
