import React, {useState, useEffect} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Item from '../Item/Item';

const Categories = ({pets}) => {
  const [categories, setCategory] = useState([
    { "name": "Gatos", "idCategory": "cat" },
    { "name": "Perros", "idCategory": "dog" }
  ]);

  console.log("categories: ", categories);
  // function mapPetList(pets, idCategory) {
  //   if(idCategory){  
  //   pets.filter(pets => pets.type === idCategory);
  //   const { id, name, type, age, time, description, pictureUrl } = pets;
  //   } else {
  //     pets.map(pets => pets);
  //     const { id, name, type, age, time, description, pictureUrl } = pets;
  //   }
  //   return pets
  //   }

  //   mapPetList(pets, categories);

//Maps the resulting array
function mapResultingArray(resultingArray) {
  return resultingArray.map((pet,id)=> {
    return <Item 
    pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
    });
};
  return (
    <div>
      <h3>vista de categorías</h3>
      <Link to={"/category/"} className="btn btn-primary">Todos</Link> 
        {categories.map((catg)=> {
        return <Link name={catg.name} 
                    idCategory={catg.idCategory} 
                    to={"/category/" + catg.idCategory} 
                    className="btn btn-primary">{catg.name}
                </Link>
                })}  
     <Outlet/>
    </div>
  )
};

export default Categories;