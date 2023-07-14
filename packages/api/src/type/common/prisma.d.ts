import { type Prisma, type PrismaClient } from "@acme/db";

export type PrismaCtx = PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>;
