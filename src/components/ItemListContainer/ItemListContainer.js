import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import getData from '../../mockapi/pets';
import "../../styles.css";
import { Button } from 'bootstrap';

const ItemListContainer = ({}) => {

  const params = useParams();
  console.log("Los params son", params);
  let idCategory = params.idCategory;

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategory] = useState([
    { "name": "Gatos", "idCategory": "cat" },
    { "name": "Perros", "idCategory": "dog" }
  ]);

  // const [age, setAge] = useState();

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
      }
    // else if (idCategory && age){
    //   getData
    //   .then((data) => {setPets(data.filter( pets => (pets.type === idCategory) & (pets.age === age)));})
    //   .catch((err) => {console.log(err);})
    //   .finally(() => {setLoading(false);},100);
    //   }
    }, 
  []);

  console.log("Pets Array: ", pets);
  console.log("Pet Categories:", categories);

  function handleSelectedCategory(e) {
    setCategory(e.target.value);
  }

  // function handleSelectedAge(e) {
  //   console.log("hola")
  //   setAge(e.target.value);
  // }

  return (
    <div>  
      <h1>Nuestros rescatados</h1> 
      <h5>Ver por...</h5>
      <div class="button-filters">
        <NavLink to={"/category/"}
              onClick={()=>handleSelectedCategory()}
              className={({isActive}) =>
              isActive ? "btn btn-primary btn-active" : "btn btn-primary"}>
              Todos 
        </NavLink>

        {categories.map((catg)=> {
              return <NavLink name={catg.name} 
              onClick={()=>handleSelectedCategory()}
              idCategory={catg.idCategory} 
              to={"/category/" + catg.idCategory} 
              className={({isActive}) =>
              isActive ? "btn btn-primary btn-active" : "btn btn-primary"}> {catg.name} 
              </NavLink>
        })}     
      </div>

      {/* <form>
        <select className="form-select" aria-label="edad">
          <option selected>Elegir edad</option>
          <option onChange={()=>handleSelectedAge()} value="1">1 a 12 meses</option>
          <option onChange={()=>handleSelectedAge()} value="2">1 a 4 años</option>
          <option onChange={()=>handleSelectedAge()} value="3">5 a 9 años</option>
          <option onChange={()=>handleSelectedAge()} value="4">+10 años</option>
        </select>
      </form>  */}

      {loading ? (
      <div className="item-list-container">
        <div className="loading-items"> Cargando... </div>
      </div>
      ) : (
      <div>
        <ItemList pets={pets} key={pets}/> 
      </div>
      )}
    </div>
  )
};


export default ItemListContainer;
