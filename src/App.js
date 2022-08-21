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

