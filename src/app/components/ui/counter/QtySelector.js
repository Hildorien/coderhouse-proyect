"use client";

import { useState } from "react";
import Counter from "@/app/components/ui/counter/Counter";
import CustomButton from "@/app/components/ui/buttons/CustomButton";
import { useCartContext } from "@/app/components/context/CartContext";

export default function QtySelector({ item }) {
    const { addToCart } = useCartContext();
    const [qty, setQty] = useState(1);

    const handleAdd = () => {
        addToCart({ ...item, quantity: qty });
    };

    return (
        <div className="flex flex-col gap-5 my-6">
            <Counter max={item.stock} counter={qty} setCounter={setQty} />
            <CustomButton className="w-full hover:bg-blue-600" onClick={handleAdd}>
                Add to cart 🛒
            </CustomButton>
        </div>
    );
}
