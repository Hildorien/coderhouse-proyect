import Image from "next/image";

export default function CartItem({ item, lang, translation, onRemoveItem }) {

    return (
        <li className="flex items-center border-b border-gray-200 py-4">
            <div className="flex-auto">
                <div className="flex items-center">
                    <Image
                        className="p-2"
                        alt={item.title[lang]}
                        src={item.image ?? '/placeholder.png'}
                        width={100}
                        height={100}
                    />
                    <div>
                        <h3 className="text-lg font-bold">{item.title[lang]}</h3>
                        <p className="text-sm text-gray-600">{item.description[lang]}</p>
                        <p className="text-sm font-bold text-gray-500">
                            {`${translation.price}: $ ${item.price}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <p className="text-sm mr-4">{`${translation.quantity}:  ${item.quantity}`}</p>
                <button
                    onClick={() => onRemoveItem(item)}
                    title={translation.remove}
                    className="text-red-500 pr-5"> 🗑 </button>
            </div>
        </li>
    );
}
