
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import { getDictionary } from "@/dictionaries";
import PostDetail from "@/app/components/posts/PostDetail";


export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Space & Exploration Blog - ${params.slug}`,
    };
}


export default async function BlogPostDetail({ params }) {
    const slug = params.slug;
    const lang = params.lang;

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.blog.page_title}>
            <div className="flex gap-10 mb-2 mt-2">
                <PostDetail slug={slug} lang={lang} translation={t} />
            </div>
        </CustomTitle>
    );
}
