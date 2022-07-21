import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({pets}) => {
  
//Maps the resulting array
function mapResultingArray(array) {
  return array.map((pet,id)=> {
    return <Item 
    pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>;
    });
};

  return (
    <div>
      <div className="item-list-container">
            {/* {pets.map((pet,id)=> {
              return <Item 
              pet={pet} key={pet.id} type={pet.type} name={pet.name} id={id}/>
             })}  */}
             {mapResultingArray(pets)}<Outlet/>
      </div>
    </div>
  )
};

export default ItemList;