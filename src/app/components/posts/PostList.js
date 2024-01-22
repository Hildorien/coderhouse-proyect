import PostCard from "./PostCard";
import { fetchPosts } from "@/app/service/blog/blogService";

export default async function PostList({ lang }) {
    const posts = await fetchPosts();

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} lang={lang} />
            ))}
        </section>
    );
}
