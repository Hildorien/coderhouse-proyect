import Image from "next/image";
import GoBack from "../ui/buttons/GoBack";
import { fetchPost } from "@/app/service/blog/blogService";

export default async function PostDetail({ slug, lang, translation }) {
    const post = await fetchPost(slug);

    return (
        <div>
            <GoBack text={translation.goBack} className="text-sm text-blue-500 underline mb-6" />
            <h1 className="text-2xl font-bold mb-4">{post.title[lang]}</h1>
            <div className="flex">
                <Image
                    alt={post.title[lang]}
                    src={post.image ?? `/placeholder.png`}
                    width={500}
                    height={500}
                />
                <div className="ml-4">
                    <p className="text-gray-700">{post.content[lang]}</p>
                </div>
            </div>
        </div>
    );
}
