import React from "react";

const CartWidget = () => {
    return (

        <a href="#" className="position-relative"><i className="fa-solid fa-cart-shopping text-dark h3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                +
            </span>
        </a>

    )
}

export default CartWidget;