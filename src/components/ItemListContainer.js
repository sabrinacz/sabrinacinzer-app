import React from 'react'
import ItemCount from './ItemCount';

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      {greeting}
    <ItemCount stock={0} initial={50} onAdd={(n) => alert(`Gracias por donar $${n}`)} />
    </div>
  )
}

export default ItemListContainer;
