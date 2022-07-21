import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  
  const [categories, setCategory] = useState([
    { "name": "Gatos", "idCategory": "cat" },
    { "name": "Perros", "idCategory": "dog" }
  ]);

  console.log("pets: ", pets);
  console.log("pet categories:", categories);

  function handleSelectedCategory(e) {
    setCategory(e.target.value)
  }


//Maps the resulting array
function mapResultingArray(array) {
  return array.map((pet,id)=> {
    return <Item 
    pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
    });
};
  return (
    <div>
      <h3>vista de categorías</h3>
        <Link to={"/category/"}
              onClick={()=>handleSelectedCategory()}
              className="btn btn-primary"> 
              Todos 
              </Link>
        {categories.map((catg)=> {
                    return <Link name={catg.name} 
                    onClick={()=>handleSelectedCategory()}
                    idCategory={catg.idCategory} 
                    to={"/category/" + catg.idCategory} 
                    className="btn btn-primary">{catg.name}
                </Link>
                })}   

      <div className="item-list-container">
            {/* {pets.map((pet,id)=> {
              return <Item 
              pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>
             })}  */}
             {mapResultingArray(pets)}<Outlet/>
      </div>
    </div>
  )
};

export default ItemList;