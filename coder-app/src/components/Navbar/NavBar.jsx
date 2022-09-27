import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg bg-transparent sticky-top ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink className="nav-link dropdown-toggle" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products Age
                            </NavLink>
                            <ul className="dropdown-menu bg-transparent text-center border-0">
                                <li><NavLink className="dropdown-item bg-transparent text-white rounded-pill" type='button' to='/category/12'>12 Years</NavLink></li>
                                <li><NavLink className="dropdown-item bg-transparent text-white rounded-pill" type='button' to='/category/15'>15 Years</NavLink></li>
                                <li><NavLink className="dropdown-item bg-transparent text-white rounded-pill" type='button' to='/category/18'>18 Years</NavLink></li>
                                <li><NavLink className="dropdown-item bg-transparent bg-transparent text-white rounded-pill" type='button' to=''>All</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-linka btn btn-warning text-dark" to='#' style={{ borderRadius: '50px', padding: '5px 15px', boxShadow: "0px 0px 2px #fff" }}>Sign Up</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;