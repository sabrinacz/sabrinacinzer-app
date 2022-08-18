import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets, key}) => {
  
//Maps the resulting array
function mapResultingArray(array) {
  return array.map((pet,id)=> {
    return (
        <Item key={pet.id} pet={pet} type={pet.type} name={pet.name} id={id} petAdded={pet.petAdded}/>
    )

    })
};

  return (
    <div>
      <div className="item-list-container">
             
              {mapResultingArray(pets)}
             
      </div>
    </div>
  )
};

export default ItemList;