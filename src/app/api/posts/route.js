import { NextResponse } from "next/server";
import sleep from "@/lib/utils";
import { mockPosts } from "@/data/posts";
import { revalidateTag } from "next/cache";

export async function GET(_,) {
    //Mock fake delay
    await sleep(1000);
    // Cache data through 'posts' tag
    revalidateTag("posts");
    return NextResponse.json(mockPosts);
}
