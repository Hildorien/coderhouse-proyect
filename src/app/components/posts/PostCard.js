import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post, lang }) {
    return (
        <Link href={`/${lang}/blog/post/${post.slug}`}>
            <article className="flex w-full shadow-lg rounded overflow-hidden mt-4">
                <div>
                    <Image
                        alt={post.title[lang]}
                        src={post.image ?? `/placeholder.png`}
                        width={250}
                        height={250}
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl text-blue-600">{post.title[lang]}</h2>
                    <p className="text-gray-700">{post.content[lang]}</p>
                </div>
            </article>
        </Link>
    );
}
