import React from 'react';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  

  // let catsArray = pets.filter (function (pet) {
  //   return pet.type === "cat";
  // })
  // console.log("Cats are:", catsArray)

  // let dogsArray = pets.filter (function (pet) {
  //   return pet.type === "dog";
  // })
  // console.log("Dogs are:", dogsArray)

  // let filteringPets = ((myArray) => {
  //   myArray.map((pet, id, self) => {
  //     console.log(pet);
  //     return <Item 
  //           pet={pet} 
  //           key={pet.id} 
  //           type={pet.type} 
  //           name={pet.name} 
  //           id={id}/> })
  //   })

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

  let resultingArray=Cats;

  //Maps the resulting array
  function mapResultingArray(resultingArray) {
    return resultingArray.map((pet,id)=> {
      console.log(pet);
      return <Item 
      pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
      });
  };
 

  console.log("Cats are:", Cats);


  return (
    <div>
      <a href="Cats">Gatos</a> 
      <a href="Dogs">Perros</a>  
      <div className="item-list-container">
            {  mapResultingArray(resultingArray)}  
      </div>
    </div>
  )
};

export default ItemList;