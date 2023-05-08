import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json("Testing GET route")
    
}

export async function POST(){
    return NextResponse.json("Testing POST route")
}