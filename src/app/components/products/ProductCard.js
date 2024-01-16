import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ item, lang }) {

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link className="flex flex-col" href={`/products/detail/${item.slug}`}>
                <Image
                    alt={item.title[lang]}
                    // In the future we will use images from Firestore (and not from the public folder)
                    src={`/placeholder.png`}
                    width={288}
                    height={288}
                />
                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.title[lang]}</h4>
                    <p className="text-2xl font-semibold mb-6">$ {item.price}</p>
                </div>
            </Link>
        </article>
    );
}
