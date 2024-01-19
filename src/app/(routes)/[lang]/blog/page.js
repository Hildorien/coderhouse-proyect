import { getDictionary } from "@/dictionaries";
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import CustomText from "@/app/components/ui/text/CustomText";
import PostList from "@/app/components/posts/PostList";

export const metadata = {
    title: "Space & Exploration - Blog",
    description: "Blog posts",
};

export default async function Blog({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.blog.page_title}>
            <PostList lang={lang} />
        </CustomTitle>
    );
}