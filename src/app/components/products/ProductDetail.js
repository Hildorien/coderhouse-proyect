import Image from "next/image";
import GoBack from "../ui/buttons/GoBack";
import QtySelector from "../ui/counter/QtySelector";
import { fetchProduct } from "@/app/service/product/productService";


export default async function ProductDetail({ slug, lang, translation }) {
    const item = await fetchProduct(slug);

    return (
        <div>
            <GoBack text={translation.goBack} className="text-sm text-blue-500 inderline mb-6" />
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={item.image ?? "/placeholder.png"}
                        alt={item.title[lang]}
                        width={800}
                        height={800}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
                        {item.title[lang]}
                    </h2>
                    <p className="text-4xl">$ {item.price}</p>
                    <QtySelector item={item} />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
                    {translation.description}
                </h3>
                <p className="text-gray-600">{item.description[lang]}</p>
            </section>
        </div>
    );
}
