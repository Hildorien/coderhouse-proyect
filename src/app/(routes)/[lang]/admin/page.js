
import { getDictionary } from "@/dictionaries";
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import CustomText from "@/app/components/ui/text/CustomText";

export const metadata = {
    title: "Space & Exploration - Admin",
    description: "Admin site",
};

export default async function Admin({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <>
            <CustomTitle title={t.admin.title}>
                <CustomText text={`${t.page_under_construction} ...`} />
            </CustomTitle>
        </>
    );
}