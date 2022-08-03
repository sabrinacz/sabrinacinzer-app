import React, {useState, useContext, useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import "./styles.css";
import {CartContext, CartContextProvider} from './CartContext/CartContext';

function App() {
  // Receiving context using deconstruction
  const {cartCount} = useContext(CartContext);
  console.log('context is', cartCount)

  // LOADING APP EMULADO 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 100);
    console.log('useEffect');
  }, []);

  return (
    <div className="App">
      <div>
        
      <NavBar/>
      <Outlet/>
      <Footer/>
      </div>
    </div>
  );
} 

export default App;

