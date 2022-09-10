import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {

    return (
        <div className="card-img-top" >
            <img src={item.pictureURL} className="card-img-top w-50 mt-3 " alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text mt-2">{item.description}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary text-center">Mas Info</Link>
                </div>
        </div>
    )
}

export default Item;