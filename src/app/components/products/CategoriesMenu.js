"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";




export default function CategoriesMenu({ translation }) {
    const pathname = usePathname();

    const lastPath = pathname.split("/").pop();
    const firstPath = pathname.split("/")[1];

    const links = [
        { label: translation.categories.all, href: "/products/all" },
        { label: translation.categories.electronics, href: "/products/electronics" },
        { label: translation.categories.fashion, href: "/products/fashion" },
        { label: translation.categories.home, href: "/products/home" },
    ];

    return (
        <aside className="flex flex-col gap-3 p-6">
            {links.map((link) => {
                const isHome = link.href === "/" && firstPath === lastPath;

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
