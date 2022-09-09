import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "../Items/ItemList";
import { productos } from "../mock"

const ItemListContainer = ({ greeting }) => {

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
                    <ItemDetailContainer />
        </div>

    )
}

export default ItemListContainer;


