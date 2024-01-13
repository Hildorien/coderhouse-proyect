import Image from "next/image";
import GoBack from "../ui/buttons/GoBack";
import QtySelector from "../ui/counter/QtySelector";


// Note on revalidation on dynamic route product/[slug]
/* 
As of next@13.4.0 the client side cache has been reworked, dynamic pages are now cached in the client with a timer of 30 seconds, 
so every 30 seconds your server is recalled, with one catch : this only apply if you navigates to a different page after that time, 
if you do very fast back & forth to the same page, the timer will reset and only wait for another 30 seconds.
 
Source: https://github.com/vercel/next.js/issues/42991
*/

async function fetchProduct(slug) {
    const product = await fetch(`http://localhost:3000/api/product/${slug}`, {
        next: {
            revalidate: 0, // Always make the request to server. We want the latest data of the product detail. (See notes above to verify no-cache policy on product detail)
        },
    }).then((res) => res.json());
    return product;
}

export default async function ProductDetail({ slug, lang, translation }) {
    const item = await fetchProduct(slug);

    return (
        <div>
            <GoBack text={translation.goBack} className="text-sm text-blue-500 inderline mb-6" />
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={"/placeholder.png"}
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
