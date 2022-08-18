import React, {useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import "../../styles.css";
import { db, getItems} from '../../firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

  const params = useParams();

  let idCategory = params.idCategory;

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategory] = useState([
    { "name": "Gatos", "i": 1, "idCategory": "cat" },
    { "name": "Perros", "i": 2, "idCategory": "dog" }
  ]);


  useEffect(() => {
    if(!idCategory) {
      getItems().then((snapshot) => {
        setPets(
              snapshot.docs.map((doc)=> ({
                  ...doc.data(),
                  id: doc.id, 
              }))
          );
     })
     .finally(() => {setLoading(false);});
    }
     else if (idCategory){
      const colRef = collection(db, 'pets'); 
      const filteringtype= query(colRef, where('type', '==', idCategory))
      getDocs(filteringtype).then((snapshot) => {
        setPets(
              snapshot.docs
              .map((doc)=> ({
                  ...doc.data(),
                  id: doc.id,
              })),
          );
     })
     .finally(() => {setLoading(false);});
     }
  }, [idCategory]);

  
  return (
    <div>  
      
      <h1>Nuestros rescatados</h1> 
      <h5>Ver por...</h5>
      <div className="button-filters">
        <NavLink to={"/category/"}
              className={({isActive}) =>
              isActive ? "btn btn-primary btn-active" : "btn btn-primary"}>
              Todos 
        </NavLink>

        {categories.map((catg)=> {
              return <NavLink name={catg.name}
              key={catg.i}
              to={"/category/" + catg.idCategory} 
              className={({isActive}) =>
              isActive ? "btn btn-primary btn-active" : "btn btn-primary"}> {catg.name} 
              </NavLink>
        })}     
      </div>

      {loading ? (
      <div className="item-list-container">
        <div className="loading-items"> Cargando rescatados... </div>
      </div>
      ) : (
      <div>
        <ItemList pets={pets} key={pets.id}/> 
      </div>
      )}
      
    </div>
    
  )
};


export default ItemListContainer;
