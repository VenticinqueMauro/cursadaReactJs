import React from 'react'

export default function ItemDetail( { producto } ) {

    let font = { fontSize: "25px", fontWeight: "600"}
    let sombra = { boxShadow: "0px 0px 5px #7d7d7d"}

    return (
        <div className='row text-center mt-5 p-4 rounded' style={sombra}>
            <h2>DESAFIO CLASE 07</h2>
            <div className="col-md-12 mt-3">
                <div className="row border" style={sombra}>
                    <div className="col-md-4">
                        <img src={producto.pictureURL} alt={producto.title} width="150" />
                    </div>
                    <div className="col-md-4 pt-4">
                        <p>{producto.title}</p>
                        <p>{producto.description}</p>
                        <p>No te lo pierdas, oferta especial.</p>
                    </div>
                    <div className="col-md-4 pt-4">
                        <p style={font}>${producto.price}</p>
                        <button className='btn btn-primary'>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
