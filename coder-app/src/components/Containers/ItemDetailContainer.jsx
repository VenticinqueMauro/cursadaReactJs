import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Items/ItemDetail";
import { productos } from "../mock";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    let { id } = useParams()

    useEffect(() => {

        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.id === parseInt(id)))
            }, 500);
        })

        getItem.then( (response) => {
            setProducto(response);
        })


    }, [id])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer;