import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({ producto }) {

    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(producto, cantidad)
    }




    return (
        <div className='row text-center mx-auto text-white  min-vh-100'>
            <div className='col d-block my-auto'>
                <div className="row contenedorDetail">
                    <div className="col-md-4 d-block my-auto pt-3 mb-3 ">
                        <img className='rounded' src={producto.pictureURL} alt={producto.title} width='300' />
                    </div>
                    <div className="col-md-8  d-block my-aut pt-3 mb-3">
                        <h3>{producto.title}</h3>
                        <p className=''>{producto.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, accusantium.</p>
                        <p className='h2'>${producto.price}</p>
                        <ItemCount id={producto.id} initial={1} stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}
