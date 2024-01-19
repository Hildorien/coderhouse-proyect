import { NextResponse } from "next/server";
import sleep from "@/lib/utils";
import { mockPosts } from "@/data/posts";


export async function GET(_, { params }) {
    const { slug } = params;
    const data = mockPosts.find((pr) => pr.slug === slug);

    //Mock fake delay
    await sleep(1000);
    return NextResponse.json(data);
}
