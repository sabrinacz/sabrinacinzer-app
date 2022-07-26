import React, {useState} from 'react';

const SearchForm = ({onSearch}) => {
    const [val, setVal] = useState('');
   
    const sendForm = (e)  => {
    e.preventDefault(); // Prevent submit
    onSearch(val);
    };

    const onchangeInput = (e) => {
        setVal(e.target.value);
        console.log(e.target.value)
    }

  return (
    <form className="d-flex" onSubmit={sendForm}>
    <input className="form-control me-2" type="search" placeholder="Buscar mascotas" aria-label="Buscar" name="search" onChange={onchangeInput}></input>
    <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  )
};

export default SearchForm;