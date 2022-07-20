import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  
  let resultingArray;

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

  resultingArray=AllPets;

  //Maps the resulting array
  function mapResultingArray(resultingArray) {
    return resultingArray.map((pet,id)=> {
      return <Item 
      pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
      });
  };
  
  //Redefines the current array with button clicks below
  function redefineArray(e, parameter) {
    console.log("Filtrar por", parameter);
    return resultingArray=parameter;
   }

  function filteringStarted(e, parameter) {
    redefineArray(resultingArray);
    mapResultingArray(resultingArray);
  }
   
 
  console.log("Pets are:", AllPets);
  console.log("Dogs are:", Dogs);
  console.log("Cats are:", Cats);


  return (
    <div>
      <button onClick={(e)=> redefineArray(e, 'AllPets')} className="btn btn-primary">Todos</button> 
      <button onClick={(e)=> redefineArray(e, 'Cats')} className="btn btn-primary pr-2">Gatos</button> 
      <button onClick={(e)=> redefineArray(e, 'Dogs')} className="btn btn-primary pr-2">Perros</button>  
      <div className="item-list-container">
            {mapResultingArray(resultingArray)}  
      </div>
    </div>
  )
};

export default ItemList;