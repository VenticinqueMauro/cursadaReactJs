import React from 'react'
import { useState } from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';

const ItemCount = ( { initial, id, onAdd, stock }) => {

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
                    <span type="button" className="btn btn-warning text-white mb-2" onClick={decrementar}>-</span>
                    <span type="button" className="btn btn-warning text-white mb-2">{count}</span>
                    <span type="button" className="btn btn-warning text-white mb-2" onClick={aumentar}>+</span>
                </div>
                <Link id={`btnCarrito${id}`} to="#" className="btn btn-warning text-white d-block mx-auto"  onClick={() => onAdd(count)} style={{boxShadow: "0px 3px 5px #7d7d7d"}}>Add <i className="fa-solid fa-whiskey-glass"></i></Link>
            </>
    )
}

export default ItemCount;