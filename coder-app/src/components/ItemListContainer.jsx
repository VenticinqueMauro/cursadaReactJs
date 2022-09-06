import React, { useState } from "react";
import { useEffect } from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { productos } from "./mock"

const ItemListContainer = ({ greeting }) => {

    const [clics, setClics] = useState(1)

    let stock = 10;
    let mensajeStock = 'Superaste el Stock disponible!'
    const alertaStock = document.getElementById('alertaStock')
    const btnCarrito = document.getElementById('btnCarrito')
    
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
            console.log("Sin Stock")
        } else {
            console.log("Stock Disponible: " + stock)
        }
    }

    // DESAFIO PROMESAS Y MAP 

    const [items, setItems] = useState([])

    useEffect(() => {

        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })

        promesa.then(resolve => {
            setItems(resolve)
        })

    }, [])


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1 className="titulo">{greeting}</h1>
                </div>
                    {/* <ItemCount aumentar={aumentar}
                    decrementar={decrementar} 
                    contador={clics} 
                    agregarAlCarrito={agregarAlCarrito}
                    mensaje={mensajeStock}/> */}
            </div>
                    <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer;


