import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({log: ['query']});
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({data: {name: "Nipun"}});
  await prisma.user.deleteMany();
  const all = await prisma.user.create({
    data: {
      name: "Nipun",
      email: "ss",
      age: 12,
      userPreference: { create: { emailUpdates: true } },
    },
    select: {
      name: true,
      userPreference: { select: { id: true } },
    },
  });
  console.log(all);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
