import { getDictionary } from '@/dictionaries';
import Cart from '@/app/components/cart/Cart';

export const metadata = {
    title: "Space & Exploration - Cart",
    description: "Your cart",
};


export default async function CartPage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <Cart lang={lang} translation={t} />
    );

}