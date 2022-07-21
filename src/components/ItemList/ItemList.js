import React, {useState, useEffect} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets, idCategory}) => {

  // //Redefines the current array with button clicks below
  // function handleClick(e, parameter) {
  //   console.log("Filtrar por", parameter);
  //   return resultingArray=parameter;
  //  }
  
  console.log("Pets are:", pets);
  const { id, name, type, age, time, description, pictureUrl } = pets;

  console.log("pet type:", idCategory);

  return (
    <div>
      <Link exact to={"/category/"} className="btn btn-primary">Todos</Link> 

      <Link to={"/category/" + type} className="btn btn-primary pr-2">Gatos</Link> 

      <Link to={"/category/" + pets.type} className="btn btn-primary pr-2">Perros</Link>  

      <div className="item-list-container">
            {pets.map((pet,id)=> {
              return <Item 
              pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>
             })}  
      </div>
    </div>
  )
};

export default ItemList;