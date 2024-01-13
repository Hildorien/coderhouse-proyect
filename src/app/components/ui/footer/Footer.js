import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className="w-full bg-grey-100 border-t relative w-full mt-auto">
            <div className="containter m-auto py-2 text-sm text-grey-700 flex justify between items-center">
                <p className="px-2">Developed by Hildorien </p>
                <Link href={"https://github.com/Hildorien"}>
                    <Image
                        src={`/github-logo.svg`}
                        alt="Github-logo"
                        width={25}
                        height={25}
                        className="rounded-full"
                    />
                </Link>
            </div>
        </footer>
    );
}
