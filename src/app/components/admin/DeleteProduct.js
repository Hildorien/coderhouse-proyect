"use client";

import { useState } from "react";

export default function DeleteProduct({ slug }) {

    const [loading, setLoading] = useState(false);

    const deleteProduct = async () => {
        setLoading(true);
        await fetch(`/api/product/${slug}`, {
            method: 'DELETE',
        }).finally(() => setLoading(false));
    }

    return (
        <>
            {!loading ?
                <button className="rounded bg-red-400 p-2 mx-1 text-white" onClick={deleteProduct}>
                    Delete
                </button> :
                <p>Deleting...</p>
            }
        </>
    );
}