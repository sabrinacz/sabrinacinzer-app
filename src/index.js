import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './views/Main';
import Contact from './views/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="main" index element={<Main/>}/>
        <Route path="contact" element={<Contact/>}/>
          <Route path="category" element={<ItemListContainer/>}>
            <Route path="cats" element={<Cats/>}/>
            <Route path="dogs" element={<Dogs/>}/>
          </Route>
        <Route path="pet/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<div>Ups! No encontramos esa URL.</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
// We have to configure the routes here


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
