"use client";

import { useRouter } from "next/navigation";

export default function GoBack({ text, ...args }) {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} {...args}>
            {text} ↩
        </button>
    );
}
