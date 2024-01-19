import Image from "next/image";

export default function CustomLoading() {
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={"/planet-black.svg"}
                alt={"Loading logo"}
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    );
}
