import { NextResponse } from "next/server";
import { materials } from "@/data/data";

export async function GET() {
    return NextResponse.json(materials)
}

export async function POST() {}

export async function DELETE() {}

export async function PUT() {}

export async function PATCH() {}