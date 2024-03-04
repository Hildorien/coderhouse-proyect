import Image from 'next/image';
import Link from 'next/link';
import DeleteProduct from './DeleteProduct';


export default async function ProductsTable({ translation, lang, items }) {
    return (
        <div className="overflow-x-auto">

            <table className="w-full text-sm text-left text-gray=600">
                <thead className="text-sm text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.name}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.price}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.in_stock}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.category}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.image}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.slug}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.description}</th>
                        <th scope="col" className="px-3 py-2">{translation.admin.product_table.actions}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.slug}>
                                <td className="p-2">{item.title[lang]}</td>
                                <td className="p-2">{item.price}</td>
                                <td className="p-2">{item.stock}</td>
                                <td className="p-2">{item.category}</td>
                                <td className="p-2">
                                    <Image
                                        src={item.image}
                                        alt={item.title[lang]}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td className="p-2">{item.slug}</td>
                                <td className="p-2 truncate max-w-prose">{item.description[lang]}</td>
                                <td className="p-2">
                                    <Link
                                        href={`${lang}/admin/edit/${item.slug}`}
                                        className="rounded bg-green-400 p-2 text-white">
                                        {translation.admin.edit}
                                    </Link>
                                    {/*When this client component changes (a product is deleted), it will trigger 
                                    a re-render of the table and the re-fetching of the items  */}
                                    <DeleteProduct slug={item.slug} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}