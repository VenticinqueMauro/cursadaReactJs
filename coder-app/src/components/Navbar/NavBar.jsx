import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to={'/'}><i className="fa-solid fa-graduation-cap animate__animated animate__heartBeat animate__delay-2s h1"></i>React Js.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link  className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}>About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={'#'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={'#'}>Comunes</Link></li>
                                <li><Link className="dropdown-item" to={'#'}>Mentolados</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;