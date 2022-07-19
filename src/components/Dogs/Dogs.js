import React from 'react';
import Item from '../Item/Item';

const Dogs = ({pets}) => {
  return (
    <div className="item-list-container">
        <h3>Dogs</h3>
        {pets?.map((pet, id, self) => {
        if (pet.type === "dog") {
            return <Item 
            pet={pet} 
            key={pet.id} 
            type={pet.type} 
            name={pet.name} 
            id={id}/>
        }
        })} 
    </div>
  )
}

export default Dogs;