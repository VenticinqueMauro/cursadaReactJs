import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail( { producto } ) {

    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(producto, cantidad)
    }


    return (

        <div className={'row text-center mt-5  mx-auto' }>
            <div className="col-12 col-md-4 offset-md-2 ">
                <img src={producto.pictureURL} alt={producto.title} width={'400'}/>
            </div>
            <div className="col-12 col-md-2 d-block my-auto">
                <h3>{producto.title}</h3>
                <p>{producto.description} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque sit fugiat vel dignissimos dolore minus repudiandae minima in eaque?</p>
                <p className='h2'>${producto.price}</p>
                <ItemCount id={producto.id} initial={1} stock={producto.stock} onAdd={onAdd} />
            </div>
        </div>

    )
}
