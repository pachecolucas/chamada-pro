import { E } from "@/app/model";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(Object.values(E).sort((a, b) => a.nome.localeCompare(b.nome)));
}
