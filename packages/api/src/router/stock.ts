import { z } from "zod";

import { zodTypes } from "@acme/db";

import { DUMMY_USER_ID } from "../constants/test";
import { createOrFind as createOrFindExpiryDate } from "../service/expiryDate";
import { createOrFindWithJanCode } from "../service/product";
import {
  addQuantity,
  createWithSku,
  find,
  findWithUserSpecificInfo,
} from "../service/stock";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const stockRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) =>
    ctx.prisma.stock.findMany({
      orderBy: { createdAt: "desc" },
      where: { userId: DUMMY_USER_ID },
      include: {
        sku: {
          include: {
            product: {
              include: {
                categories: true,
              },
            },
            expiryDate: true,
          },
        },
      },
    }),
  ),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => findWithUserSpecificInfo(ctx.prisma, input.id)),

  addQuantityById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        quantity: z.number(),
      }),
    )
    .mutation(({ ctx, input }) =>
      // TODO: catch error
      ctx.prisma.stock.update({
        where: { id: input.id },
        data: { quantity: { increment: input.quantity } },
      }),
    ),

  createOrAddQuantity: publicProcedure
    .input(
      z.object({
        janCode: z.string(),
        quantity: z.number(),
        expiryDate: zodTypes.ExpiryDateCreateWithoutSkusInputSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { janCode, quantity } = input;

      const existsStock = await find(prisma, janCode, input.expiryDate);
      if (existsStock) {
        return addQuantity(prisma, existsStock.id, quantity);
      }

      const product = await createOrFindWithJanCode(prisma, janCode);
      const expiryDate = await createOrFindExpiryDate(prisma, input.expiryDate);

      return createWithSku(prisma, product.id, expiryDate.id, quantity);
    }),
});
