"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]); // This will add duplicates but we can megre cart items in CartPage
    };

    //QtySelector component adds to cart the items with the additional property "quantity".
    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const isInCart = (item) => {
        return cart.some((i) => i.slug === item.slug);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const removeFromCart = (item) => {
        // Substract one from item quantity, If the quantity is 0, remove the item
        const index = cart.findIndex((i) => i.slug === item.slug);
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            setCart([...cart]);
        } else {
            setCart(cart.filter((i) => i.slug !== item.slug));
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, totalQty, isInCart, emptyCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
