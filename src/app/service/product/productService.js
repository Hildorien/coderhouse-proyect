export async function fetchProducts(category) {
    const products = await fetch(
        `http://localhost:3000/api/products/${category}`,
        {
            next: {
                revalidate: 0, // Always make the request to server. We want the latest data of the products.
            }
        },
    ).then((res) => res.json());
    return products;
}

export async function fetchProduct(slug) {
    const product = await fetch(`http://localhost:3000/api/product/${slug}`, {
        next: {
            revalidate: 0, // Always make the request to server. We want the latest data of the product detail.
        },
    }).then((res) => res.json());
    return product;
}