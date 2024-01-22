import LoginForm from "@/app/components/forms/auth/LoginForm";
import { getDictionary } from "@/dictionaries";

export const metadata = {
    title: "Space & Exploration - Login",
    description: "Login",
};

/* 
This is a parallel route called Slot. 
The login slot will be rendered in the admin page and passed as props to the shared parent layout which is AdminLayout 

Source: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots */

export default async function LoginPage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <div>
            <LoginForm translation={t} />
        </div>
    )
}