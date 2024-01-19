import PostCard from "./PostCard";

async function fetchPosts() {
    const posts = await fetch(
        `http://localhost:3000/api/posts`,
        {
            cache: "force-cache",
            next: {
                tags: ["posts"], // Caching by tag
            },
        },
    ).then((res) => res.json());
    return posts;
}

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
