export async function fetchPosts() {
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

export async function fetchPost(slug) {
    // No need to revalidate. A post is not going to change that often.
    const post = await fetch(`http://localhost:3000/api/post/${slug}`).then((res) => res.json());
    return post;
}