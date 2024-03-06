"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartWidget from "@/app/components/ui/cart/CartWidget";


export default function NavMenuList({ translation }) {
    const pathname = usePathname();

    const lastPath = pathname.split("/").pop();
    const lang = pathname.split("/")[1];

    const links = [
        { label: translation.home, href: `/${lang}` },
        { label: translation.products.title, href: `/${lang}/products/all`, },
        { label: translation.blog.menu_title, href: `/${lang}/blog` },
        { label: translation.contact.menuTitle, href: `/${lang}/contact` },
        { label: translation.about.menuTitle, href: `/${lang}/about` },
        { label: "Admin", href: `/${lang}/admin` }
    ];


    return (
        <nav className="flex justify-between gap-2">
            {links.map((link) => {
                const isHome = link.href === "/" && lang === lastPath;
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
