import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const sessions = await prisma.session.findMany({
    orderBy: { startAt: "asc" },
  });
  return NextResponse.json(sessions);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await req.json();
  const { title, startAt, endAt } = body;

  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const created = await prisma.session.create({
    data: {
      title: title ?? "Focus session",
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      ownerId: dbUser?.id,
    },
  });

  return NextResponse.json(created, { status: 201 });
}
