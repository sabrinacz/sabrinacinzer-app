import React, {useState, useContext, useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import "./styles.css";
import {CartContext, CartContextProvider} from './cartContext/cartContext';
import {getItems} from './firebase.js';

function App() {
  // Receiving context using deconstruction
  const {cartCount} = useContext(CartContext);

  // LOADING APP EMULADO 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getItems().then((snapshot) => {
      console.log(
            snapshot.docs.map((doc)=> ({
                id: doc.id, 
                ...doc.data(),
            }))
        );
    });
    setTimeout(() => {
      setLoading(false); 
    }, 100);
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

