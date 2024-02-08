"use client";
import CartItem from "@/app/components/cart/CartItem";
import { useMemo } from "react";
import { useCartContext } from "@/app/components/context/CartContext";
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import CustomButton from "@/app/components/ui/buttons/CustomButton";

export default function Cart({ lang, translation }) {
    const { cart, emptyCart, removeFromCart } = useCartContext();

    // Cart can have duplicated items. In this page we want to merge them
    const mergeCart = useMemo(() => {
        let mergedCart = [];

        cart.forEach(
            (item) => {
                const target = mergedCart.find((i) => i.slug === item.slug);

                if (target) {
                    // Item duplicated -> add their quantity
                    target.quantity += item.quantity;
                } else {
                    mergedCart.push({ ...item }); // Add a new copy of the item
                }
            },
            [cart],
        );

        return mergedCart;
    }, [cart]);

    // Function to calculate the total price
    const calculateTotalPrice = useMemo(() => {
        let totalPrice = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
        return totalPrice.toFixed(2);
    }, [cart]);

    const onEmptyCart = () => {
        emptyCart();
    }

    const onRemoveItem = (item) => {
        removeFromCart(item)
    }

    return (
        <CustomTitle title={translation.cart.title} >
            <ul>
                {mergeCart.map((item) => (
                    <CartItem key={item.slug} item={item} lang={lang} translation={translation} onRemoveItem={onRemoveItem} />
                ))}
            </ul>
            <div className="mt-8">
                <h3 className="text-lg font-bold">
                    {`${translation.cart.total}: $ ${calculateTotalPrice}`}
                </h3>
            </div>
            <CustomButton className="mt-6" onClick={onEmptyCart}>
                {translation.cart.empty}
            </CustomButton>
        </CustomTitle>
    );
}
