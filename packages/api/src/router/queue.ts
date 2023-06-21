import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

import { PrismaDefaultType, PrismaContextType } from "@acme/db"

export const queueRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.queue.findMany({ orderBy: { createdAt: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.queue.findFirst({ where: { id: input.id } });
    }),
});
