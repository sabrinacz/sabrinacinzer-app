import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const increase = () => {
      setCount(count+50);
    } 
    const decrease = () => {
      setCount((prevValue) => (prevValue > 50 ? count - 50 : count));
    }
  return (
    <div>
        <p>Realizá tu donación. Mínimo $50</p>
        <h3>{count}</h3>
        <button onClick={decrease}> - </button>
        <button onClick={increase} > + </button>
        <button
        onClick={() => {
          if (count >= stock) {
            onAdd(count);
          }
        }}
        > Realizá tu donación </button>
    </div>
  )
};

export default ItemCount;