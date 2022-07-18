import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import "./styles.css";

function App() {

// LOADING APP EMULADO 
  const [loading, setLoading] = useState(true); 
  //Loading va a controlar si está cargando mi componente

  // useEffect -> si le paso un array vacío va a detectar cuando mi componente se monta

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
      // Tengo que usar el setter, porque no puedo hacer loading = false. Puede recibir una función.
    }, 2000);
    // Después de 3seg va a false
    console.log('useEffect');
  }, []);

  return (
    <div className="App">
      {loading ? ( // RENDERIZADO CONDICIONAL Si loading, cargando. si es falso, muestra la app.
      <div id="loadingscreen">
        <h3 class="loadinganimation"> Cargando app... </h3>
      </div>
      ) : (
      <div>
      <NavBar />
      <ItemListContainer greeting = {"Este es el item list container"} />
      </div>
      )}  
    </div>
  );
} 

/*
return (
  <div className="App">
    <h3> Cargando </h3>
    <div>
    <NavBar />
    <ItemListContainer greeting = {"¡Bienvenido/a a Patitas!"} />
    </div>
  </div>
);
}
*/

export default App;

