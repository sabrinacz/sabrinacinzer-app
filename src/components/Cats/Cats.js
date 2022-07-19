import React from 'react';
import Item from '../Item/Item';

const Cats = ({pets}) => {
  return (
    <div className="item-list-container">
        <h3>Cats</h3>
        {pets?.map((pet, id, self) => {
        if (pet.type === "cat") {
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

export default Cats;