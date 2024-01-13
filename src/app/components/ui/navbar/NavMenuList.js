"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartWidget from "@/app/components/ui/cart/CartWidget";


export default function NavMenuList({ translation }) {
    const pathname = usePathname();

    const lastPath = pathname.split("/").pop();
    const firstPath = pathname.split("/")[1];

    const links = [
        { label: translation.home, href: "/" },
        { label: translation.products.title, href: "/products/all", },
        { label: translation.contact.menuTitle, href: "/contact" },
        { label: translation.about.menuTitle, href: "/about" },
    ];


    return (
        <nav className="flex justify-between gap-2">
            {links.map((link) => {
                const isHome = link.href === "/" && firstPath === lastPath;
                return (
                    <Link
                        key={link.label}
                        className={`${link.href.split("/").pop() === `${lastPath}` || isHome ? "font-semibold border-b" : ""
                            } text-base text-slate-100 p-3`}
                        href={link.href}
                    >
                        {link.label}
                    </Link>)
            })}
            <CartWidget />
        </nav>
    );
}
