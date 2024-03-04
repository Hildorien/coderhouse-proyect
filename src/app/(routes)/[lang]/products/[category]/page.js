export const dynamic = 'force-dynamic';

import CustomLoading from "@/app/components/loading/CustomLoading";
import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import ProductList from "@/app/components/products/ProductList";
import { getDictionary } from "@/dictionaries";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Space & Exploration Shop - ${params.category}`,
    };
}

/* 
Since this section is a dynamic route we can statically generate
routes at build time instead of on-demand at request time.

Return an array of all possible routes that match the value
category of the products
*/

export function generateStaticParams() {
    return [
        { category: "all" },
        { category: "electronics" },
        { category: "home" },
        { category: "fashion" },
    ];
}

export default async function Products({ params }) {
    const category = params.category;
    const lang = params.lang;

    const t = await getDictionary(lang);

    return (
        <main className="flex-grow">
            <h1 className="text-4xl text-blue-600 my-4 p-4">{t.products.title}</h1>
            <hr />
            <div className="flex gap-10 mt-2 mb-2">
                <CategoriesMenu translation={t} />
                {/* This Suspense is the old way of suspending a component while executing an async function. In Next 14 we can create a loading file inside the folder */}
                <Suspense fallback={<CustomLoading />}>
                    <ProductList category={category} lang={lang} />
                </Suspense>
            </div>
        </main>
    );
}
