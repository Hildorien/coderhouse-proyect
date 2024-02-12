import config from "@/config";

export async function fetchPosts() {
    const posts = await fetch(
        `${config.serverUrl}/api/posts`,
        {
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
    const post = await fetch(`${config.serverUrl}/api/post/${slug}`).then((res) => res.json());
    return post;
}