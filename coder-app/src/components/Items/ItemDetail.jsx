import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail( { producto } ) {


    return (

        <div className={'row text-center mt-5  mx-auto' }>
            <div className="col-12 col-md-4 offset-md-2 ">
                <img src={producto.pictureURL} alt={producto.title} width={'400'}/>
            </div>
            <div className="col-12 col-md-2 d-block my-auto">
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <p className='h2'>${producto.price}</p>
                <ItemCount id={producto.id} initial={1} stock={10} />
            </div>
        </div>

    )
}
