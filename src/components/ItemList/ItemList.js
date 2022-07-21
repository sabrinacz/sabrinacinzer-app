import React, {useState, useEffect} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets}) => {

  const [categories, setCategory] = useState([
    { "name": "Gatos", "idCategory": "cat" },
    { "name": "Perros", "idCategory": "dog" }
  ]);


  console.log("pets: ", pets);

  console.log("pet type:", categories);

  function mapPetList(pets, idCategory) {
    console.log("holi");
    let resultingArray;
    if(idCategory){  
      pets.filter(pets => pets.type === idCategory);
      const { id, name, type, age, time, description, pictureUrl } = pets;
      return resultingArray = mapResultingArray(pets)
      } else {
        const { id, name, type, age, time, description, pictureUrl } = pets;
        return resultingArray = mapResultingArray(pets)
      }}


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
  
        {categories.map((catg)=> {
                    return <Link name={catg.name} 
                    onClick={()=>mapPetList(catg.idCategory)}
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
             {mapPetList(pets)}
      </div>
    </div>
  )
};

export default ItemList;