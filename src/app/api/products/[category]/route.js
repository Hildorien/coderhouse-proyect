import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
    const { category } = params;

    const productsRef = collection(db, "products");

    const q =
        category === "all"
            ? productsRef
            : query(productsRef, where("category", "==", category));

    const queryResult = (await getDocs(q)).docs;

    const docs = queryResult.map((doc) => doc.data());

    return NextResponse.json(docs);
}
