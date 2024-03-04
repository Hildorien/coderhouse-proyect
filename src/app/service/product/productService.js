export async function fetchProducts(category) {
    const products = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${category}`,
        {
            method: "GET",
            next: {
                revalidate: 0,
            }
        },
    ).then((res) => res.json());
    return products;
}

export async function fetchProduct(slug) {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${slug}`, {
        method: "GET",
        next: {
            revalidate: 0,
        }
    }).then((res) => res.json());
    return product;
}

export async function deleteProduct(slug) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${slug}`, {
        method: "DELETE",
    }).then((res) => res.json());
    return response;
}