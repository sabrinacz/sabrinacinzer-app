import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FavWidget from "./FavWidget";

const NavBar = () => {

    const [categories, setCategory] = useState([
        { "name": "Gatos", "idCategory": "cat" },
        { "name": "Perros", "idCategory": "dog" }
      ]);

      
    const searchPets = () => {
        
        
    }


    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink 
                to="/" 
                className={({isActive}) =>
                isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page">
                Patitas
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <NavLink 
                    to="/" 
                    className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page" >
                    Inicio
                </NavLink>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rescatados
                </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>            
                            <NavLink to={"/category/"}
                            className="dropdown-item"> 
                            Todos 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/category/cat"}
                            className="dropdown-item"
                            aria-current="page">
                                Gatos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/category/dog"} 
                            className="dropdown-item"
                            aria-current="page">
                                Perros
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                <NavLink 
                    to="/contact" 
                    className={({isActive}) =>
                    isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page">
                    Contacto
                </NavLink>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi perfil
                </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Configuración</a></li>
                        <li><a className="dropdown-item" href="#">Favoritos</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </li>

            </ul>
            <SearchForm onsearch={searchPets}/>
            <FavWidget/>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;
    