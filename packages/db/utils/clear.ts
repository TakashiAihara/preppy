import { Prisma, PrismaClient } from "@prisma/client";

import { getSchemaName, getTableNames } from "./common";

const prisma = new PrismaClient();

export async function clear(prisma: PrismaClient) {
  const schemaName = await getSchemaName(prisma);
  console.log(`schemaName: ${schemaName}`);

  for (const modelName of await getTableNames(schemaName, prisma)) {
    console.log(`modelName: ${modelName}`);
    await prisma.$queryRaw`
    DROP TABLE IF EXISTS
    "${Prisma.raw(schemaName)}"."${Prisma.raw(modelName)}" CASCADE`;
  }
}

clear(prisma)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
