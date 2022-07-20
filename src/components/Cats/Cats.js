import React from 'react';
import Item from '../Item/Item';

const Cats = ({pets}) => {
  return (
    <div className="item-list-container">
        <h3>Cats</h3>

        {pets.map((pet) => {
        if (pet.type == "cat") {
        console.log("Cat: ", pet);
        return pet;
        }    
        })} 
    </div>
  )
}

export default Cats;