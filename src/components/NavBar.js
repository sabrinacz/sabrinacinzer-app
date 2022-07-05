import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Patitas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Rescatados</a>
                </li>
                <li className="nav-item">
                <a className="nav-link">Contacto</a>
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
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar mascotas" aria-label="Buscar"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <CartWidget/>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;
    