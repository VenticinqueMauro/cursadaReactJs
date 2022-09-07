import React from "react";


const Item = ({ item }) => {

    let font = { fontSize: "25px"}

    return (
        <div className="card-img-top" >
            <img src={item.pictureURL} className="card-img-top w-50 mt-3 " alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text mt-2">{item.description}</p>
                    <p className="card-text" style={font}>${item.price}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
        </div>
    )
}

export default Item;