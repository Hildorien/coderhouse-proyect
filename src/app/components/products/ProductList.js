import ProductCard from "./ProductCard";
import { fetchProducts } from "@/app/service/product/productService";

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
