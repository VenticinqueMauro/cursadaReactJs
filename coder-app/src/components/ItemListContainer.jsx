import React from "react";

const ItemListContainer = ({greeting}) => {
    
    

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


