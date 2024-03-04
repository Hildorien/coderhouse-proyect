import { NextResponse } from "next/server";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET(_, { params }) {
    const { slug } = params;

    const docRef = doc(db, "products", slug);

    const docResult = await getDoc(docRef);

    return NextResponse.json(docResult?.data() || {});
}


export async function DELETE(_, { params }) {
    const { slug } = params;

    const docRef = doc(db, "products", slug);

    await deleteDoc(docRef);

    return NextResponse.json({ message: "Document deleted successfully" });
}