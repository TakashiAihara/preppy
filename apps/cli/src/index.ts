import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { Command, Option } from "commander";
import superjson from "superjson";

import type { AppRouter } from "@acme/api";

type OptionType = { origin: string; quantity: number };

const createTRPCClient = (origin: string) => {
  return createTRPCProxyClient<AppRouter>({
    transformer: superjson, // Required option due to inherited type
    links: [
      httpBatchLink({
        url: `${origin}/api/trpc`,
      }),
    ],
  });
};

const originOption = new Option("-o, --origin <origin>", "origin").default(
  "http://localhost:3000",
);
const quantityOption = new Option("-q, --quantity <quantity>", "quantity")
  .default(1)
  .argParser<number>(parseInt);

const program = new Command();
const queueCommand = program.command("queue");

queueCommand
  .description("Queue JAN code")
  .command("add")
  .argument("<jan>", "jan")
  .addOption(quantityOption)
  .addOption(originOption)
  .action(async (jan: string, { origin, quantity }: OptionType) => {
    const result = await createTRPCClient(origin).queue.createOrAdd.mutate({
      code: jan,
      quantity,
    });
    console.log("Added successfully.");
    console.log(result);
  });

queueCommand
  .description("Get queued JAN codes")
  .command("get")
  .addOption(originOption)
  .action(async ({ origin }: OptionType) => {
    const result = await createTRPCClient(origin).queue.all.query();
    console.log(result);
  });

program.parse(process.argv);
