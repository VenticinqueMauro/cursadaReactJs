import React from "react";
import Item from "./Item";


const ItemList = ({ items }) => {
    return (
        <div className="row text-center min-vh-100">
            {items.map(item => (
                <div key={item.id} className="col-md-3 text-center">
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default ItemList;