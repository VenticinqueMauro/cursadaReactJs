import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { getFirestore, collection, getDocs, query, where  } from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    let { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'whiskys')
        const queryItems = categoryId ? query(itemsCollection, where('category', '==', categoryId )) : itemsCollection;
        getDocs(queryItems).then(snapShot => {
            setItems(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
        })
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


