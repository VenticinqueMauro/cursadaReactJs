import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";


const Item = ({ item }) => {

    const [clics, setClics] = useState(1)

    let stock = 10;
    let mensajeStock = 'Superaste el Stock disponible!'
    const alertaStock = document.getElementById('alertaStock')
    const btnCarrito = document.getElementById(`btnCarrito${item.id}`)
    
    const aumentar = () => {
        clics < stock ? setClics(clics + 1) : alertaStock.innerHTML = mensajeStock;
    }
    const decrementar = () => {
        clics > 1 ? setClics(clics - 1) : console.log("cantidad erronea")
    }

    const agregarAlCarrito = () => {
        console.log(clics + " Producto/s Agregados")
        stock = stock - clics;
        if ( stock < 1) {
            btnCarrito.disabled = true;
            btnCarrito.classList.add('btn-danger')
            btnCarrito.innerHTML = `Sin Stock`
            console.log("Sin Stock")
        } else {
            console.log("Stock Disponible: " + stock)
        }
    }

    let font = { fontSize: "25px"}

    return (
        <div className="card-img-top" >
            <img src={item.pictureURL} className="card-img-top w-50 mt-3 " alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text mt-2">{item.description}</p>
                    <p className="card-text" style={font}>${item.price}</p>
                    <ItemCount aumentar={aumentar}
                    decrementar={decrementar} 
                    contador={clics} 
                    agregarAlCarrito={agregarAlCarrito}
                    mensaje={mensajeStock}
                    id={item.id}/>
                </div>
        </div>
    )
}

export default Item;