import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row text-center">
            <h2 className="mt-5">DESAFIO CLASE 06</h2>
            {items.map(item => (
                <div key={item.id} className="col-md-3 text-center">
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default ItemList;