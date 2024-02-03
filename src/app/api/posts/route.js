import { NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_,) {
    const postsRef = collection(db, "posts");

    const queryResult = (await getDocs(postsRef)).docs;

    const posts = queryResult.map((doc) => doc.data());

    return NextResponse.json(posts);
}
