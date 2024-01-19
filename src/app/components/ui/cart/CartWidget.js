"use client";
import Link from "next/link";
import { useCartContext } from "@/app/components/context/CartContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CartWidget() {
    const { totalQty } = useCartContext();
    const pathname = usePathname();
    const lang = pathname.split("/")[1];

    return (
        <Link
            href={`/${lang}/cart`}
            className={"text-base text-slate-100 p-3 flex items-center"}
        >
            <Image src={"/cart.svg"} alt="Cart icon" width={30} height={30} />
            <span>{totalQty()}</span>
        </Link>
    );
}
