import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { queueRouter } from "./router/queue";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  queue: queueRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
