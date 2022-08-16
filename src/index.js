import React, { createContext, useContext }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './views/Contact';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContext, CartContextProvider} from './cartContext/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<CartContextProvider><App/></CartContextProvider>}>
        <Route index path="/"  element={<ItemListContainer/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="category" element={<ItemListContainer/>}/>
        <Route path="category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/pet/:id" element={<ItemDetailContainer/>}/>
        <Route path="Cart" element={<Cart/>}/>
        <Route path="*" element={<div>Ups! No encontramos esa URL.</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>  
  </div>
);
// We have to configure the routes here


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
