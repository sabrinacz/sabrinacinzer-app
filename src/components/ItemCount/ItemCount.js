import { useState } from 'react';

const ItemCount = ({stock, initial, donation, onAdd }) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
      setCount((prevValue) => (prevValue < 1000 ? count + 50 : count));
    } 
    const decrease = () => {
      setCount((prevValue) => (prevValue > 100 ? count - 50 : count));
    }
    
  return (
    <div>
        <h3>${count}</h3>
        <button className="btn btn-secondary" onClick={decrease}> - </button>
        <button className="btn btn-secondary" onClick={increase} > + </button>
        <div className="mt-2">
          <button className="btn btn-primary"
          onClick={() => {
            if (count <= stock) {
              let donation = count;
              onAdd(count);
              return donation;
              }
            }}
            > 
            Confirmar monto  
            </button>
        </div>
    </div>
  )
};

export default ItemCount;