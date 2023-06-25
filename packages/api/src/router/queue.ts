import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const DUMMY_USER_ID = "001";

export const queueRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.queue.findMany({
      orderBy: { createdAt: "desc" },
      include: { jan: { include: { candidates: true } } },
    });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.queue.findFirst({ where: { id: input.id } });
    }),
  createOrAdd: publicProcedure
    .input(z.object({ code: z.string(), quantity: z.number() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      const { code, quantity } = input;
      const { queue } = ctx.prisma;

      const existsQueue = await queue.findFirst({
        where: {
          janCode: code,
        },
      });

      if (existsQueue) {
        const { id, quantity: existsQuantity } = existsQueue;

        return queue.update({
          where: { id },
          data: {
            quantity: existsQuantity + quantity,
          },
        });
      } else {
        return queue.create({
          data: {
            quantity: quantity,
            jan: {
              connectOrCreate: {
                where: { code },
                create: { code },
              },
            },
            user: {
              connect: { id: DUMMY_USER_ID },
            },
          },
        });
      }
    }),
});
