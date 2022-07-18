import React from 'react';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  return (
    <div className="item-list-container">
        {pets?.map((pet, i, self) => {
        console.log(pet);
        return <Item key={pet.id} pet={pet} />// Uso el operador rest. Por cada uno de mis elementos del array llamo a Item que tiene un div, h3...
        })} 
    </div>
  )
}



export default ItemList;