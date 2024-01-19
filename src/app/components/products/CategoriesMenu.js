"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";




export default function CategoriesMenu({ translation }) {
    const pathname = usePathname();

    const lastPath = pathname.split("/").pop();
    const lang = pathname.split("/")[1];

    const links = [
        { label: translation.categories.all, href: `/${lang}/products/all` },
        { label: translation.categories.accessories, href: `/${lang}/products/accessories` },
        { label: translation.categories.fashion, href: `/${lang}/products/fashion` },
        { label: translation.categories.home, href: `/${lang}/products/home` },
    ];

    return (
        <aside className="flex flex-col gap-3 p-6">
            {links.map((link) => {
                const isHome = link.href === "/" && lang === lastPath;

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${link.href.split("/").pop() === `${lastPath}` || isHome ? "font-semibold border-b" : ""
                            } py-2`}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </aside>
    );
}
