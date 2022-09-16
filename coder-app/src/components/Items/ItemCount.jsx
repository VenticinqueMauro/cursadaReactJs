import React from 'react'
import { useState } from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';

const ItemCount = ( { stock, initial, id, onAdd }) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        count < stock && setCount(count + 1)
    };

    const decrementar = () => {
        count > initial && setCount(count - 1)
    };


    return (

            <>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" className="btn btn-warning text-white mb-2" onClick={decrementar}>-</a>
                    <a type="button" className="btn btn-warning text-white mb-2">{count}</a>
                    <a type="button" className="btn btn-warning text-white mb-2" onClick={aumentar}>+</a>
                </div>
                <Link id={`btnCarrito${id}`} to="#" className="btn btn-warning text-white d-block mx-auto" onClick={() => onAdd(count)} style={{boxShadow: "0px 3px 5px #7d7d7d"}}>Add to Cart <i className="fa-solid fa-face-laugh-beam"></i></Link>
            </>
    )
}

export default ItemCount;