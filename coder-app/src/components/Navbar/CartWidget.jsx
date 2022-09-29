import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const { totalProd } = useContext(CartContext)

    return (

        <Link to="/cart" className="position-relative pt-2 "><i className="fa-solid fa-whiskey-glass  h3 vasito" style={{textShadow: '0px 0px 3px #000'}}></i>
            <span className="position-absolute top-0 start-100 translate-middle text-warning badge rounded-pill bg-dark fs-6" style={{textShadow: '0px 0px 3px #000'}}>
                {totalProd() ? totalProd() : ""}
            </span>
        </Link>

    )
}

export default CartWidget;
