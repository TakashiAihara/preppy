import { authRouter } from "./router/auth";
import { queueRouter } from "./router/queue";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  queue: queueRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
