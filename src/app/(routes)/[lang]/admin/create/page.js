import ProductForm from "@/app/components/admin/ProductsForms";
import { getDictionary } from "@/dictionaries";

export default async function CreatePage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <div className="container m-auto mt-6">
            <ProductForm translation={t} lang={lang} />
        </div>
    );
}