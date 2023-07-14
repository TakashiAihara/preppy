import { type Prisma } from "@acme/db";

import { type PrismaCtx } from "../type/common/prisma";

export const create = async (
  prisma: PrismaCtx,
  { day, month, year, type }: Prisma.ExpiryDateCreateWithoutSkusInput,
) =>
  prisma.expiryDate.create({
    data: {
      day,
      month,
      year,
      type,
    },
  });

export const find = async (
  prisma: PrismaCtx,
  { day, month, year, type }: Prisma.ExpiryDateCreateWithoutSkusInput,
) =>
  prisma.expiryDate.findFirst({
    where: { day, month, year, type },
  });

export const createOrFind = async (
  prisma: PrismaCtx,
  { day, month, year, type }: Prisma.ExpiryDateCreateWithoutSkusInput,
) =>
  (await find(prisma, { day, month, year, type })) ??
  create(prisma, { day, month, year, type });

export const exists = async (
  prisma: PrismaCtx,
  { day, month, year, type }: Prisma.ExpiryDateCreateWithoutSkusInput,
) => !!(await find(prisma, { day, month, year, type }));
