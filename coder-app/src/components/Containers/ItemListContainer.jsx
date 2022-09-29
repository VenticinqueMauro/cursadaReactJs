import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { getFirestore, collection, getDocs, query, where  } from 'firebase/firestore'
import { Loading } from "../Loading/Loading";



const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    let { categoryId } = useParams()
    let { lessthan25 } = useParams()
    let { lessthan100 } = useParams()
    let { morethan100 } = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'whiskys')
        const queryItems = categoryId ? query(itemsCollection, where('category', '==', categoryId )) : itemsCollection;
        getDocs(queryItems).then(snapShot => {
            setItems(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'whiskys')
        const queryItems = lessthan25 ? query(itemsCollection, where('price', '<=', 25000)) : itemsCollection;
        getDocs(queryItems).then(snapShot => {
            setItems(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
            setLoading(false)
        })
    }, [lessthan25])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'whiskys')
        const queryItems = lessthan100 ? query(itemsCollection, where('price', '<', 100000)) : itemsCollection;
        getDocs(queryItems).then(snapShot => {
            setItems(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
            setLoading(false)
        })
    }, [lessthan100])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'whiskys')
        const queryItems = morethan100 ? query(itemsCollection, where('price', '>', 100000)) : itemsCollection;
        getDocs(queryItems).then(snapShot => {
            setItems(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
            setLoading(false)
        })
    }, [morethan100])


    return (
        <div className="container mb-5">
            <div className="row mt-2">
                <div className="col">
                    <h1 className="titulo">Your Winerie</h1>
                </div>
            </div>
            {loading ? <Loading /> : <ItemList items={items} /> }       
        </div>
    )
}

export default ItemListContainer;


