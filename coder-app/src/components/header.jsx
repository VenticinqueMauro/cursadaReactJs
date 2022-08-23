import React from "react";
import logo from "./img/ENE.png";


const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" width="60" className="animate__animated animate__heartBeat animate__delay-2s" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sandalias</a></li>
                                <li><a className="dropdown-item" href="#">Botas</a></li>
                                <li><a className="dropdown-item" href="#">Stilettos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="position-relative"><i className="fa-solid fa-cart-shopping text-dark h3"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            +
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;