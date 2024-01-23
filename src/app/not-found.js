import GoBack from '@/app/components/ui/buttons/GoBack';
import { getDictionary } from '@/dictionaries';

/* NotFound components do not accept any props -> We can't internationalize it
Source https://nextjs.org/docs/app/api-reference/file-conventions/not-found */
export default async function NotFound() {

    // At this level of the app we can't detect the languague of the client so we need to use the default language
    const t = await getDictionary('es');

    return (
        <div className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">{t.notFound.title}</h2>
            <p className="text-gray-700 text-md mb-4">{t.notFound.message}</p>
            <GoBack text={t.goBack} className="text-sm text-blue-500 inderline mb-6" />
        </div>
    )

}