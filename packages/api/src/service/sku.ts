import { type ExpiryDate, type Product } from "@acme/db";

import { type PrismaCtx } from "../type/common/prisma";

export const create = async (
  prisma: PrismaCtx,
  product: Product,
  expiryDate?: ExpiryDate,
) =>
  prisma.sku.create({
    data: {
      product: {
        connect: {
          id: product.id,
        },
      },
      ...(expiryDate && {
        expiryDate: {
          connect: {
            id: expiryDate.id,
          },
        },
      }),
    },
  });

export const find = async (
  prisma: PrismaCtx,
  product: Product,
  expiryDate?: ExpiryDate,
) =>
  prisma.sku.findFirst({
    where: {
      productId: product.id,
      ...(expiryDate && {
        expiryDateId: expiryDate.id,
      }),
    },
  });

export const exists = async (
  prisma: PrismaCtx,
  product: Product,
  expiryDate?: ExpiryDate,
) => !!(await find(prisma, product, expiryDate));

export const createOrFind = async (
  prisma: PrismaCtx,
  product: Product,
  expiryDate?: ExpiryDate,
) =>
  (await find(prisma, product, expiryDate)) ??
  create(prisma, product, expiryDate);
