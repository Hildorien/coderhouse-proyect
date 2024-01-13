import Image from "next/image";

export default function CustomLoading() {
    return (
        <div className="w-full flex justify-center items-center">
            <Image
                src={"/next.svg"}
                alt={"Loading logo"}
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    );
}
