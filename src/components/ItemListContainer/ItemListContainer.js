import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList/ItemList';
import getData from '../../mockapi/pets';
import "../../styles.css";

const ItemListContainer = ({greeting}) => {

  // function onAddCallback(n) {
  //   alert(`Agregaste ${n} productos`);
  // }

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("pets: ", pets);
  // cuenta = [value, seter] = [val, setValue] 

  // Promesa. 
  // Then -> se llama cuando se resuelve nuestra promesa
  // Catch -> para errores
  // Finally -> para el final de la promesa, sin importar su estado.
 
  useEffect(() => {
    getData
      .then((data) => {
        setPets(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  //Async/Await
  //Syntactic sugar. Doesn't block the execution of the rest of the code.
  /* 
  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await getData;
        setPets(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPets();
  }, []); 
  */

  // function addPets(time, pet) {
  //   return new Promise((resolve,reject) => {
  //     if (pet) {
  //       setTimeout(resolve, time, pet);
  //     } else {
  //       reject('no name')
  //     }
  //   });
  // };

  // var myPromise = addPets(3000,'hola');

  // myPromise
  // .then((str) => {
  //   console.log(str);
  // })  
  // .catch((str) => {
  //   console.log(str);
  // })

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount 
        stock={0} 
        initial={50} 
        onAdd={(n) => alert(`Gracias por donar $${n}`)} />
      
      {loading ?
      <span> Loading...</span> : 
      <ItemList pets={pets}/> //le paso el json a itemlist
      }
    </div>
  )
};

export default ItemListContainer;
