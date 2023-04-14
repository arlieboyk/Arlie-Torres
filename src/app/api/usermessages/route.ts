import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const userMessage = await prisma.user.findMany();

  return NextResponse.json({ userMessage });
}

type BodyTypes = {
  id: number;
};

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({ msg: "asdff" });
}
