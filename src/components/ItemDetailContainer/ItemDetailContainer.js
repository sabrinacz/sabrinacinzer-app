import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../mockapi/pets';
import "../../styles.css";


const ItemDetailContainer = ({}) => {
/*  
  let params = useParams();
  console.log(params);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(pets + params.id)
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
  }, [params.id]);  
    
 
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
