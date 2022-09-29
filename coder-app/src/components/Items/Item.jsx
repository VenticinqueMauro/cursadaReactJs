import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {

    return (

        <div className="card mt-5 border-0 rounded d-block mx-auto bg-transparent" style={{width: '12rem'}}>
            <img src={item.pictureURL} className="card-img-top  pt-3 pb-2" alt={item.title} />
                <div className="card-body bg-dark text-white rounded">
                    <p className="card-title h6">{item.title}</p>  
                    <hr />  
                    <div className="d-flex justify-content-around d-block my-auto">
                    <h4 className="d-block my-auto h6">${item.price}</h4>
                    <Link to={`/item/${item.id}`} className="btn text-end d-block my-auto btn-info" style={{boxShadow: "-2px 3px 5px #000"}}><i className="fa-solid fa-info"></i></Link>
                    </div>
                </div>
        </div>

    )
}

export default Item;