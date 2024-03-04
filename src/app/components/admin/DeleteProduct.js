"use client";

import { useState } from "react";
import { deleteProduct } from "@/app/service/product/productService";
import { useRouter } from 'next/navigation'

export default function DeleteProduct({ slug }) {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setLoading(true);
        await deleteProduct(slug);
        setLoading(false);
        router.refresh();
    }

    return (
        <>
            {!loading ?
                <button className="rounded bg-red-400 p-2 mx-1 text-white" onClick={handleDelete}>
                    Delete
                </button> :
                <p>Deleting...</p>
            }
        </>
    );
}