import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ItemCart } from './itemCart'

export const Cart = () => {

    const { cart, precioTotal, clear } = useContext(CartContext)

    if (precioTotal() < 1) {

        return (
            <div className='text-center mt-5  p-5 carritoVacio  min-vh-100 '>
                <div className='contenedorVacio p-5 '>
                                    <h2 className='h1 d-block my-auto'>There are no bottles in the glass!</h2>
                <Link to='/' style={{color: '#ffc107'}}><h3 className='carritoVacioVolver '>Come Back!</h3></Link>
                </div>

            </div>
        )
    }

    return (
        <div className='container pt-3 text-center text-white p-3 min-vh-100 d-flex align-items-center'>
            <div className="row pt-3 contenedorCart ">
                {cart.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
                <div className="row pt-3">
                    <div className="col-md-4">
                        <button className='btn btn-warning text-black d-block mx-auto rounded-pill' onClick={() => clear()} style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600'}}>Delete all</button>
                    </div>
                    <div className="col-md-4 h2">
                        <p>Total: <b>${precioTotal()}</b></p>
                    </div>
                    <div className="col-md-4">
                        <button className='btn btn-warning text-black d-block mx-auto rounded-pill' style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600'}}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
