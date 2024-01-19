import CustomTitle from "@/app/components/ui/title/CustomTitle";
import CustomText from "@/app/components/ui/text/CustomText";
import { getDictionary } from "@/dictionaries";


/**
 * Home page inside the [lang] folder. This page will be rendered in the root of the website
 */
export default async function HomePage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.welcome.title}>
            <CustomText text={t.welcome.message} />
        </CustomTitle>
    )
}