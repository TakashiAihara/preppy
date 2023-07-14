import { type Prisma } from "@acme/db";

import { DUMMY_USER_ID } from "../constants/test";
import { type PrismaCtx } from "../type/common/prisma";

export const find = async (
  prisma: PrismaCtx,
  janCode: string,
  { day, month, year, type }: Prisma.ExpiryDateCreateWithoutSkusInput,
) =>
  prisma.stock.findFirst({
    where: {
      sku: {
        expiryDate: {
          type,
          year,
          month,
          day,
        },
        product: {
          janCode,
        },
      },
      user: {
        id: DUMMY_USER_ID,
      },
    },
  });

export const addQuantity = async (
  prisma: PrismaCtx,
  id: string,
  quantity: number,
) =>
  prisma.stock.update({
    where: { id },
    data: {
      quantity: {
        increment: quantity,
      },
    },
    include: {
      sku: {
        include: {
          product: true,
        },
      },
    },
  });

export const incrementQuantity = async (prisma: PrismaCtx, id: string) =>
  prisma.stock.update({
    where: { id },
    data: {
      quantity: {
        increment: 1,
      },
    },
  });

export const createWithSku = async (
  prisma: PrismaCtx,
  productId: string,
  expiryDateId: string,
  quantity: number,
) =>
  prisma.stock.create({
    data: {
      sku: {
        connectOrCreate: {
          where: {
            expiryDateId_productId: {
              expiryDateId: expiryDateId,
              productId: productId,
            },
          },
          create: {
            expiryDate: {
              connect: { id: expiryDateId },
            },
            product: {
              connect: { id: productId },
            },
          },
        },
      },
      user: {
        connect: { id: DUMMY_USER_ID },
      },
      quantity,
    },

    include: {
      sku: {
        include: {
          product: true,
        },
      },
    },
  });

export const findWithUserSpecificInfo = async (
  prisma: PrismaCtx,
  stockId: string,
) =>
  prisma.stock.findUnique({
    where: { id: stockId },
    include: {
      sku: {
        include: {
          product: {
            include: {
              categories: true,
              productTags: true,
            },
          },
          expiryDate: true,
        },
      },
      group: {
        include: {
          group: {
            include: {
              group: {
                include: {
                  group: {
                    include: {
                      group: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
