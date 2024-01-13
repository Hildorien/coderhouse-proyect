import Image from "next/image";

// Loading specific for product details
export default function Loading() {
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={"/vercel.svg"}
                alt={"Loading product detail..."}
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    );
}
