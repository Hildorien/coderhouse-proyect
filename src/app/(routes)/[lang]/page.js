import CustomTitle from "@/app/components/ui/title/CustomTitle";
import { getDictionary } from "@/dictionaries";


/**
 * Home page inside the [lang] folder. This page will be rendered in the root of the website
 */
export default async function HomePage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.welcome.title}>
            <p className="text-gray-700 text-sm mt-4 mb-4">
                {t.welcome.message}
            </p>
        </CustomTitle>
    )
}