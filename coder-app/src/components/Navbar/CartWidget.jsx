import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const { totalProd } = useContext(CartContext)

    return (

        <Link to="/cart" className="position-relative"><i className="fa-solid fa-cart-shopping text-dark h3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                {totalProd() ? totalProd() : ""}
            </span>
        </Link>

    )
}

export default CartWidget;