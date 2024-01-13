import ProductCard from "./ProductCard";

async function fetchProducts(category) {
    const products = await fetch(
        `http://localhost:3000/api/products/${category}`,
        {
            cache: "force-cache",
            next: {
                tags: ["products"], // Caching by tag
            },
        },
    ).then((res) => res.json());
    return products;
}

export default async function ProductList({ category, lang }) {
    const products = await fetchProducts(category);

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {products.map((item) => (
                <ProductCard key={item.slug} item={item} lang={lang} />
            ))}
        </section>
    );
}
