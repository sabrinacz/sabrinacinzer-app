import React, {useState, useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
    }, 100);
    console.log('useEffect');
  }, []);

  // return (
  //   <div className="App">
  //     {loading ? ( // RENDERIZADO CONDICIONAL Si loading, cargando. si es falso, muestra la app.
  //     <div id="loadingscreen">
  //       <h3 class="loadinganimation"> Cargando app... </h3>
  //     </div>
  //     ) : (
  //     <div>
  //     <NavBar />
  //     <Outlet/>
  //     <Footer />
  //     </div>
  //     )}  
  //   </div>
  // );

  return (
    <div className="App">
      <div>
      <NavBar />
      <Outlet/>
      <Footer />
      </div>
    </div>
  );
} 


export default App;

