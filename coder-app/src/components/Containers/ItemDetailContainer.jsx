import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Items/ItemDetail";
import { getFirestore, doc, getDoc,  } from 'firebase/firestore'
import { Loading } from "../Loading/Loading";



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)


    let { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const response = doc(db, 'whiskys', id);
        getDoc(response).then(snapShot => {
            setProducto({id: snapShot.id, ...snapShot.data()})
            setLoading(false)
        })
    }, [id])

    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={producto} /> }       
        </>
    )
}

export default ItemDetailContainer;