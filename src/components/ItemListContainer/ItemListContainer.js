import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import getData from '../../mockapi/pets';
import "../../styles.css";
import { Button } from 'bootstrap';

const ItemListContainer = ({}) => {
  function onAddCallback(n) {
    alert(`Agregaste ${n} productos`);
  }

  const params = useParams();
  console.log("Los params son", params);
  let idCategory = params.idCategory;

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Promise 
  useEffect(() => {
    if(!idCategory) {
      getData
      .then((data) => {setPets(data);})
      .catch((err) => {console.log(err);})
      .finally(() => {setLoading(false);},100);
      }
    else if (idCategory){
        getData
        .then((data) => {setPets(data.filter( pets => pets.type === idCategory));})
        .catch((err) => {console.log(err);})
        .finally(() => {setLoading(false);},100);
}}, []);

  console.log("Pets Array: ", pets);

  return (
    <div>  
      <h1>Nuestros rescatados</h1>   
      {loading ? (
      <span> Cargando...</span> 
      ) : (
      <div>
        <ItemList pets={pets}/> 
      </div>
      )}
    </div>
  )
};


export default ItemListContainer;
