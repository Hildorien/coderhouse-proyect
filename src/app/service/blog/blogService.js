import config from "@/config";

export async function fetchPosts() {
    const posts = await fetch(
        `${config.NEXT_PUBLIC_API_URL}/api/posts`,

        {
            method: "GET",
            cache: "force-cache",
            next: {
                tags: ["posts"], // Caching by tag
            },
        },
    ).then((res) => res.json());
    return posts;
}

export async function fetchPost(slug) {
    // No need to revalidate. A post is not going to change that often.
    const post = await fetch(`${config.NEXT_PUBLIC_API_URL}/api/post/${slug}`, {
        method: "GET",
    }).then((res) => res.json());
    return post;
}