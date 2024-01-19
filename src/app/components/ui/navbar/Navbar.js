import Link from "next/link";
import Image from "next/image";
import NavMenuList from "./NavMenuList";
import { getDictionary } from "@/dictionaries";

export default async function Navbar({ lang }) {

    const translation = await getDictionary(lang);

    return (
        <header className="w-full bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link href={"/"}>
                    <Image src={"/planet.svg"} alt="main-logo" width={50} height={50} />
                </Link>
                {/* Create a client component to display menu list with user interactivity */}
                <NavMenuList translation={translation} />
            </div>
        </header>
    );
}
