import { useState, useContext, useEffect} from 'react';
import { CartContext } from '../../cartContext/cartContext';

const ItemCount = ({selectedPet, idPet, stock, initial, onAdd }) => {
   const { updateDonation } = useContext(CartContext);

    const [count, setCount] = useState(initial);
    useEffect(() => {
      setCount(count);
    }, [count])
  
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
          onClick={(e, selectedPet) => {
            e.preventDefault();
            if (count <= stock) {
              onAdd(count);
            }
            updateDonation(selectedPet,idPet,count)
            }}
            > 
            Confirmar monto  
            </button>
        </div>
    </div>
  )
};

export default ItemCount;