import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({log: ['query']});
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({data: {name: "Nipun"}});
  //   await prisma.user.deleteMany();
  // const s = await prisma.user.create({
  //   data: {
  //     name: "Nipun",
  //     email: "swsssss",
  //     age: 14,
  //     userPreference: { create: { emailUpdates: true } },
  //   },
  //   select: {
  //     name: true,
  //     userPreference: { select: { id: true } },
  //   },
  // });

  await prisma.user.update({where:{email:""},data:{email:"test1@gmail.com"}});

  const all = await prisma.user.findMany({
    where: {  age: { gt: 10 } }, //gt, gte, lt, lte, in, notIn, equals, not, contains, startsWith, endsWith
    //where:{OR:[{age: {gt: 10}},{name: {contains: "Nipun"}}]}, //AND, OR, NOT
    orderBy: { age: "asc" },
  }); //findUnique , findFirst, findMany
  console.log(all);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
