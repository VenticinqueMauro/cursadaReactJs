import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    const [clics, setClics] = useState(1)

    let stock = 10;
    let mensajeStock = 'Superaste el Stock disponible!'
    const alertaStock = document.getElementById('alertaStock')
    
    const aumentar = () => {
        clics < stock ? setClics(clics + 1) : alertaStock.innerHTML = mensajeStock;
    }
    const decrementar = () => {
        clics > 1 ? setClics(clics - 1) : console.log("cantidad erronea")
    }

    const agregarAlCarrito = () => {
        console.log(clics + " Producto/s Agregados")
        stock = stock - clics;
        stock < 1 ? console.log("Sin Stock") : console.log("Stock Disponible: " + stock)
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1 className="titulo">{greeting}</h1>
                </div>
                <div className="col-md-12">
                    <ItemCount aumentar={aumentar}
                    decrementar={decrementar} 
                    contador={clics} 
                    agregarAlCarrito={agregarAlCarrito}
                    mensaje={mensajeStock}/>
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer;


