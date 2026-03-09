import { E } from "@/app/model";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(E);
}
