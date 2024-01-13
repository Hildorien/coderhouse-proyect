import { getDictionary } from "@/dictionaries";
import CustomTitle from "@/app/components/ui/title/CustomTitle";

export const metadata = {
    title: "About Us",
    description: "About our website",
};

export default async function About({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.about.title}>
            <p className="text-gray-700 text-sm mt-4 mb-4">
                {t.about.message}
            </p>
        </CustomTitle>
    );
}