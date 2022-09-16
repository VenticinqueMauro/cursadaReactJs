import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const clear = () => setCart([])

    const isInCart = (id) => {
        return cart.find(item => item.id === id) ? true : false
    }

    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }



    const addItem = (item, cantidad) => {
        const prodSeleccionado = { ...item, cantidad }

        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            }))
        } else {
            setCart([...cart, prodSeleccionado])
        }

    }

    console.log(cart)




    return (
        <CartContext.Provider value={{ addItem, clear, isInCart, removeItem }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;