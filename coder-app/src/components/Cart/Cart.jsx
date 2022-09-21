import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ItemCart } from './itemCart'

export const Cart = () => {

    const { cart, precioTotal, clear } = useContext(CartContext)

    if (precioTotal() < 1) {

        return (
            <div className='text-center mt-5'>
                <h2>No hay productos en el Carrito!</h2>
                <Link to='/'><h3>Volver al Inicio</h3></Link>
            </div>
        )
    }

    return (
        <div className='container mt-5 text-center'>
            <div className="row">
                    {cart.map((product) => (
                        <ItemCart key={product.id} product={product} />
                    ))}
                    <hr />
                    <div className="row mt-3">                      
                    <div className="col-md-4">
                        <button onClick={() => clear()}>Vaciar</button>
                    </div>
                    <div className="col-md-4">
                    <p>Precio Total: ${precioTotal()}</p>
                    </div>
                    <div className="col-md-4">
                        <button>Comprar</button>
                    </div>
                    </div>
            </div>
        </div>
    )
}
