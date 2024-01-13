
import ProductDetail from "@/app/components/products/ProductDetail";
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import { getDictionary } from "@/dictionaries";

export default async function Detail({ params }) {
    const slug = params.slug;
    const lang = params.lang;

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.products.title}>
            <div className="flex gap-10 mb-2 mt-2">
                <ProductDetail slug={slug} lang={lang} translation={t} />
            </div>
        </CustomTitle>
    );
}
