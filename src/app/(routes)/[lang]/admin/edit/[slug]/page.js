import ProductForm from "@/app/components/admin/ProductsForms";
import { fetchProduct } from "@/app/service/product/productService";
import { getDictionary } from "@/dictionaries";

export default async function EditPage({ params }) {
    const slug = params.slug;
    const product = await fetchProduct(slug);
    const t = await getDictionary(params.lang);
    return (
        <div className="container m-auto mt-6">
            <ProductForm formValues={product} translation={t} lang={params.lang} />
        </div>
    );
}