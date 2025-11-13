// Simple seed: create demo user and one session
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@focus.ai" },
    create: { email: "demo@focus.ai", name: "Demo User" },
    update: {},
  });

  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0);
  const end = new Date(start.getTime() + 25 * 60 * 1000);

  await prisma.session.create({
    data: {
      title: "Demo focus session",
      startAt: start,
      endAt: end,
      ownerId: user.id,
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
