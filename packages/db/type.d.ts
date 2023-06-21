import { type Prisma, type PrismaClient } from "@prisma/client";

export type PrismaDefaultType = PrismaClient<
	Prisma.PrismaClientOptions,
	never,
	Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>;

export type PrismaContextType = {
	prisma: PrismaDefault;
};
