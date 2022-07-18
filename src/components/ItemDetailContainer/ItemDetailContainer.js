import React, {useState, useEffect} from 'react';
import getData from '../../mockapi/pets';
import "../../styles.css";


const ItemDetailContainer = ({}) => {
  /* 
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  // cuenta = [value, seter] = [val, setValue] 

  //Async/Await
  //Syntactic sugar. Doesn't block the execution of the rest of the code.
  const detail = {
    "id": 1,
    "name": "Terry",
    "type": "dog",
    "age": 2,
    "time": "años",
    "description": "Cuando quiero mimos me encanta venir a pedírtelos, me llevo bien con todo. Me adapta a cualquier espacio. Soy juguetón y me encanta pasear, voy super tranquilo.",
    "pictureUrl": `${process.env.PUBLIC_URL}/assets/Terry.jpeg`
    };

    /* 
    useEffect(() => {
    const getItem = async () => {
      try {
        const response = await getData;
        setResult(json.result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getItem();
    }, []);  
    
   
  useEffect((detail)=> {
    detail;
    .then((res) => res.json());
    .then((json)) => {
        setResult(json.results);
        setLoading(false);
    });


  return (
    <div>
      {loading ?
      <span> Loading...</span> : 
      <ItemDetail pets={result}/> //le paso el json a itemlist
      }
    </div>
  )
};
*/
}
export default ItemDetailContainer;
