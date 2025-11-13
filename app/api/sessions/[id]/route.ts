import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const session = await prisma.session.findUnique({
    where: { id: params.id },
  });

  if (!session) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(session);
}
