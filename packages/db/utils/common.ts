import { type PrismaClient } from "@prisma/client";

type InformationSchemaTablesResult = {
  table_name: string;
};

type CurrentSchemaResult = {
  current_schema: string;
};

export const getSchemaName = async (prisma: PrismaClient) => {
  const result: CurrentSchemaResult[] = await prisma.$queryRaw`
    SELECT current_schema()`;

  return result[0]?.current_schema ?? "public";
};

export const getTableNames = async (
  schemaName: string,
  prisma: PrismaClient,
) => {
  const result: InformationSchemaTablesResult[] = await prisma.$queryRaw`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_type='BASE TABLE'
    AND table_schema=${schemaName};`;

  return result.map((e) => e.table_name);
};
