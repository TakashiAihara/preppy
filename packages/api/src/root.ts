import { authRouter } from "./router/auth";
import { stockRouter } from "./router/stock";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  stock: stockRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
