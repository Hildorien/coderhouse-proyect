import { getDictionary } from '@/dictionaries';
import Cart from '@/app/components/cart/Cart';

export default async function CartPage({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <Cart lang={lang} translation={t} />
    );

}