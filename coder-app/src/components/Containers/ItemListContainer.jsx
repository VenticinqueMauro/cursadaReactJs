import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { productos } from "../mock"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    let { categoryId } = useParams()

    useEffect(() => {

        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 500)
        });

        if (categoryId) {
            promesa.then(resolve => setItems(resolve.filter( item => item.category === categoryId)));
        } else {
            promesa.then(resolve => setItems(resolve))
        }

    }, [categoryId])



    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col">
                    <h1 className="titulo">{greeting}</h1>
                </div>
            </div>
                    <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;


