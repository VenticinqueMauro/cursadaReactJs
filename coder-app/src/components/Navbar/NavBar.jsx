import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to='/'><i className="fa-solid fa-graduation-cap animate__animated animate__heartBeat animate__delay-2s h1"></i>React Js.</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <NavLink  className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='#'>About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to='/category/12'>12 Años</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/category/15'>15 Años</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/'>Todos</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;