import React from 'react'
import imgCard from "../img/img.png";


const ItemCount = (props) => {
    return (

        <div className="card imgCard" >
            <img src={imgCard} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <div id="alertaStock" className="alert text-danger bold" role="alert">{props.mensajeStock}</div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" className="btn btn-primary mb-2" onClick={props.decrementar}>-</a>
                    <a type="button" className="btn btn-primary mb-2">{props.contador} {props.producto}</a>
                    <a type="button" className="btn btn-primary mb-2" onClick={props.aumentar}>+</a>
                </div>
                <button id="btnCarrito" href="#" className="btn btn-primary d-block mx-auto" onClick={props.agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;