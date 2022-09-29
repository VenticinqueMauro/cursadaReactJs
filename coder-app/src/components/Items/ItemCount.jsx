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
                <div className="btn-group mt-3 text-black" role="group" aria-label="Basic example">
                    <span type="button" className="btn btn-outline-warning text-white mb-2 fw-bold " onClick={decrementar}><i className="fa-solid fa-caret-down"></i></span>
                    <span type="button" className="btn btn-outline-warning text-white mb-2 fw-bold">{count}</span>
                    <span type="button" className="btn btn-outline-warning text-white mb-2 fw-bold " onClick={aumentar}><i className="fa-solid fa-caret-up"></i></span>
                </div>
                <div className=''>

                <Link id={`btnCarrito${id}`} to="#" className="btn btn-warning text-black mt-3 fw-bold rounded-pill"  onClick={() => onAdd(count)} style={{boxShadow: "0px 3px 5px #0000"}}>Add <i className="fa-solid fa-plus"></i></Link>
                <Link to='/cart' className='btn btn-warning text-black mt-3 fw-bold rounded-pill ms-5' style={{boxShadow: "0px 3px 5px #0000"}}>Go Glass! <i className="fa-solid fa-whiskey-glass"></i></Link>
                </div>
            </>
    )
}

export default ItemCount;