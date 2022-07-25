import React, {useState, useEffect} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import getData from '../../mockapi/pets';
import "../../styles.css";

const ItemListContainer = () => {
  function onAddCallback(n) {
    alert(`Agregaste ${n} productos`);
  }

  let [pets, setPets] = useState([]);
  let [loading, setLoading] = useState(true);
  
  // Promise 
  useEffect(() => {
    getData
      .then((data) => {
        setPets(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let AllPets = 
    pets.map ((pet,id) => {
        return pet;
      });

  let Dogs = 
    pets.filter(function(pet)  {
      return pet.type==="dog";}).map ((pet,id) => {
        return pet;
      });

  let Cats = 
    pets.filter(function(pet)  {
      return pet.type==="cat";}).map ((pet,id) => {
        return pet;
      });
  
  function handleClick(e, parameter, filterName) {
    e.preventDefault();
    console.log("Filtrar por", filterName);
    setPets(parameter);
    return ( <ItemList pets={pets}/> )
  };
 
  console.log("Pets Array: ", pets);
  console.log("Dogs are:", Dogs);
  console.log("Cats are:", Cats);

  return (
    <div>  
      <h1>Nuestros rescatados</h1>   
      {loading ? (
      <span> Cargando...</span> 
      ) : (
      <div>
        <button onClick={(e)=> handleClick(e, AllPets, "Todos")} className="btn btn-primary">Todos</button> 
        <button onClick={(e)=> handleClick(e, Cats, "Gatos")} className="btn btn-primary pr-2">Gatos</button> 
        <button onClick={(e)=> handleClick(e, Dogs, "Perros")} className="btn btn-primary pr-2">Perros</button>  
        <ItemList pets={pets}/> 
      </div>
      )}
    </div>
  )
};

export default ItemListContainer;
