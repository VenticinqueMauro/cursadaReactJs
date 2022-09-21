import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export const ItemCart = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='col-md-12'>
            <div className="row d-flex align-items-center">
                <div className="col-md-2">
                    <img src={product.pictureURL} alt={product.title} width='150' />
                </div>
                <div className="col-md-2 ">
                    <p>{product.title}</p>
                </div>
                <div className="col-md-2">
                    <p>Cantidad: {product.cantidad}</p>
                </div>
                <div className="col-md-2">
                    <p>Unitario: ${product.price}</p>
                </div>
                <div className="col-md-2">
                    <p>SubTotal: ${product.price * product.cantidad}</p>
                </div>
                <div className="col-md-2">
                    <button onClick={() => removeItem(product.id)} >Eliminar</button>
                </div>
            </div>
        </div>
    )
}
