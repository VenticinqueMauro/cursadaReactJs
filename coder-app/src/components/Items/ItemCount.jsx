import React from 'react'
import { useState } from 'react';


const ItemCount = ( { stock, initial, id }) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        count < stock && setCount(count + 1)
    };

    const decrementar = () => {
        count < initial && setCount(count - 1)
    };

    const agregarAlCarrito = () => {
        console.log(count + " Producto/s Agregados")
        stock = stock - count;
        if ( stock < 1) {
            const btnCarrito = document.getElementById(`btnCarrito${id}`)
            btnCarrito.disabled = true;
            btnCarrito.classList.add('btn-danger')
            btnCarrito.innerHTML = `Sin Stock! <i class="fa-solid fa-face-frown"></i>`
            console.log("Sin Stock")
        } else {
            console.log("Stock Disponible: " + stock)
        }
    }



    return (

            <>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" className="btn btn-primary mb-2" onClick={decrementar}>-</a>
                    <a type="button" className="btn btn-primary mb-2">{count}</a>
                    <a type="button" className="btn btn-primary mb-2" onClick={aumentar}>+</a>
                </div>
                <button id={`btnCarrito${id}`} href="#" className="btn btn-primary d-block mx-auto" onClick={agregarAlCarrito}>Agregar <i className="fa-solid fa-face-laugh-beam"></i></button>
            </>
    )
}

export default ItemCount;