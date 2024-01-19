import ContactForm from "@/app/components/forms/contact/ContactForm";
import { getDictionary } from "@/dictionaries";
import CustomTitle from "@/app/components/ui/title/CustomTitle";

export const metadata = {
    title: "Space & Exploration - Contact Us",
    description: "Contact us for more information",
};


export default async function Contact({ params: { lang } }) {

    const translation = await getDictionary(lang);

    return (
        <CustomTitle title={translation.contact.menuTitle} >
            <ContactForm translation={translation} />
        </ CustomTitle>
    );
}
