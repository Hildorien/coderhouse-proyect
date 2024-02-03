import { NextResponse } from "next/server";


export async function GET(request, { params }) {

    const { lang } = params;

    const t = await getDictionary(lang);

    return NextResponse.json(t);
}
