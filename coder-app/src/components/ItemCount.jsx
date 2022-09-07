import React from 'react'


const ItemCount = (props) => {
    return (

            <>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" className="btn btn-primary mb-2" onClick={props.decrementar}>-</a>
                    <a type="button" className="btn btn-primary mb-2">{props.contador} {props.producto}</a>
                    <a type="button" className="btn btn-primary mb-2" onClick={props.aumentar}>+</a>
                </div>
                <button id={`btnCarrito${props.id}`} href="#" className="btn btn-primary d-block mx-auto" onClick={props.agregarAlCarrito}>Agregar al carrito</button>
            </>
    )
}

export default ItemCount;