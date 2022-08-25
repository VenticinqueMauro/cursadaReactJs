import React from "react";

const ItemListContainer = () => {
    
    let greeting = 'Hola Jesus! aqui Mauro Venticinque xd'

    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1>{greeting}</h1>
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer;