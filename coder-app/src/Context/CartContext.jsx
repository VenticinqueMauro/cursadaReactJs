import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const addCart = (item, cantidad) => {

        const prodSeleccionado = {...item, cantidad}
        setCart([...cart, prodSeleccionado])
    }
    
    console.log(cart)




    return (
        <CartContext.Provider value={{ addCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;