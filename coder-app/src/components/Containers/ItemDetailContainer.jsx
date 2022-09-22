import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Items/ItemDetail";
import { getFirestore, doc, getDoc,  } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    let { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const response = doc(db, 'whiskys', id);
        getDoc(response).then(snapShot => {
            setProducto({id: snapShot.id, ...snapShot.data()})
            
        })
    }, [id])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer;