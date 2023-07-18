import { type PrismaCtx } from "../type/common/prisma";
import { fetchYahooAndJanken } from "../util/scrape";

const TEST_SITE_ID = "003";
const TEST_CATEGORY_ID = "001";

export const createWithJanCode = async (prisma: PrismaCtx, janCode: string) => {
  const { image, name } = await fetchYahooAndJanken(janCode);

  return prisma.product.create({
    data: {
      title: name,
      image: image,
      janSite: {
        connect: {
          id: TEST_SITE_ID,
        },
      },
      categories: {
        connect: {
          id: TEST_CATEGORY_ID,
        },
      },
      jan: {
        connectOrCreate: {
          create: { code: janCode },
          where: { code: janCode },
        },
      },
    },
  });
};

export const createWithProductInfo = async (
  prisma: PrismaCtx,
  name: string,
  image?: string | null,
) =>
  prisma.product.create({
    data: {
      title: name,
      image: image,
      janSite: {
        connect: {
          id: TEST_SITE_ID,
        },
      },
      categories: {
        connect: {
          id: TEST_CATEGORY_ID,
        },
      },
    },
  });

export const find = async (prisma: PrismaCtx, janCode: string) =>
  prisma.product.findFirst({
    where: { janCode },
  });

export const createOrFindWithJanCode = async (
  prisma: PrismaCtx,
  janCode: string,
) => (await find(prisma, janCode)) ?? createWithJanCode(prisma, janCode);

export const exists = async (prisma: PrismaCtx, janCode: string) =>
  !!(await find(prisma, janCode));
