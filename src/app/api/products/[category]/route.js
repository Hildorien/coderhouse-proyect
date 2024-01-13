import { NextResponse } from "next/server";
import sleep from "@/lib/utils";
import { revalidateTag } from "next/cache";
import { mockData } from "@/data/catalog";

export async function GET(_, { params }) {
    const { category } = params;
    const data =
        category === "all"
            ? mockData
            : mockData.filter((i) => i.category.toLowerCase() === category.toLowerCase());

    //Mock fake delay. This sleep will execute the first time but future requests will be cached to deliver content instantly. (sleep won't be executed)
    await sleep(1000);
    // Cache data through 'products' tag
    revalidateTag("products");
    return NextResponse.json(data);
}
