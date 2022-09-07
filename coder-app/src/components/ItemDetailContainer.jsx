import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./mock";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {

        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.id === 1))
            }, 2000);
        })

        getItem.then( (response) => {
            setProducto(response);
        })


    }, [])

    return (
            <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer;