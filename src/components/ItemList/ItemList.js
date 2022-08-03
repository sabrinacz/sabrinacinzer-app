import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  
//Maps the resulting array
function mapResultingArray(array) {
  return array.map((pet,id)=> {
    return (
    <Link to={`/pet/${pet.id}`} className="text-decoration-none text-black">
    <Item 
    pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
    </Link>
    )

    });
};

  return (
    <div>
      <div className="item-list-container">
            {/* {pets.map((pet,id)=> {
              return <Item 
              pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>
             })}  */}
             
              {mapResultingArray(pets)}
             
      </div>
    </div>
  )
};

export default ItemList;