
import { getDictionary } from "@/dictionaries";
import Link from 'next/link';
import ProductsTable from "@/app/components/admin/ProductsTable";
import { fetchProducts } from "@/app/service/product/productService";
import LogoutButton from "@/app/components/ui/buttons/LogoutButton";

export const metadata = {
    title: "Space & Exploration - Admin",
    description: "Admin site",
};

export default async function Admin({ params: { lang } }) {

    const t = await getDictionary(lang);
    const items = await fetchProducts("all");

    return (
        <div className="container m-auto mt-6">
            <LogoutButton />
            <h2 className="text-2xl my-10 border-b pb-4">{t.admin.title}</h2>
            <div className="mb-6">
                <Link
                    href={`${lang}/admin/create`}
                    className="rounded bg-blue-400 text-white p-2">
                    {t.admin.add_product}
                </Link>
            </div>
            <ProductsTable translation={t} lang={lang} items={items || []} />
        </div>
    );
}