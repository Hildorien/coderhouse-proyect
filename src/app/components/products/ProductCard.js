import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ item, lang }) {
    return (
        <article className="basis-72 shadow-lg rounded">
            <Link className="flex flex-col" href={`/${lang}/products/detail/${item.slug}`}>
                <Image
                    alt={item.title[lang]}
                    src={item.image ?? `/placeholder.png`}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', height: '300px' }}

                />
                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.title[lang]}</h4>
                    <p className="text-2xl font-semibold mb-6">$ {item.price}</p>
                </div>
            </Link>
        </article>
    );
}
