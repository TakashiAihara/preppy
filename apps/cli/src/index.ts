import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { Command, Option } from "commander";
import superjson from "superjson";

import type { AppRouter, RouterInputs } from "@acme/api";

type Expiry =
  RouterInputs["stock"]["createOrAddQuantity"]["expiryDate"]["type"];
type ExpiryArray = Array<Expiry>;

type OptionOrigin = {
  origin: string;
};

type OptionQuantity = {
  quantity: number;
};

type OptionExpiryType = {
  expiryType: Expiry;
};

type OptionYear = {
  year: number;
};

type OptionMonth = {
  month: number;
};

type OptionDay = {
  day: number;
};

const toInt = (value: string) => parseInt(value, 10);

const expiryTypeChoices: ExpiryArray = [
  "BEST_BEFORE_DATE",
  "EXPIRATION_DATE",
  "MANUAL_DATE",
];
const expiryTypeDefault: Expiry = "BEST_BEFORE_DATE";

const originOption = new Option("-o, --origin <origin>", "origin").default(
  "http://localhost:3000",
);

const quantityOption = new Option("-q, --quantity <quantity>", "quantity")
  .default("1")
  .argParser<number>(toInt);

const expiryTypeOption = new Option(
  "-e, --expiryType <expiryType>",
  "expiryType",
)
  .default(expiryTypeDefault)
  .choices(expiryTypeChoices); // TODO: use constants from external (API or DB or Other)

const yearOption = new Option("-y, --year <year>", "year")
  .default(new Date().getFullYear())
  .argParser<number>(toInt);

const monthOption = new Option("-m, --month <month>", "month")
  .default(new Date().getMonth() + 1)
  .argParser<number>(toInt);

const dayOption = new Option("-d, --day <day>", "day")
  .default(new Date().getDate())
  .argParser<number>(toInt);

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

const program = new Command();
const stockCommand = program.command("stock");

stockCommand
  .description("Get all stocks")
  .command("getAll")
  .addOption(originOption)
  .action(async ({ origin }: OptionOrigin) => {
    const result = await createTRPCClient(origin).stock.all.query();
    console.log(result);
  });

stockCommand
  .description("Add stock with JAN code")
  .command("add")
  .argument("<code>", "code")
  .addOption(originOption)
  .addOption(quantityOption)
  .addOption(expiryTypeOption)
  .addOption(yearOption)
  .addOption(monthOption)
  .addOption(dayOption)
  .action(
    async (
      code: string,
      {
        quantity,
        origin,
        expiryType,
        year,
        month,
        day,
      }: OptionOrigin &
        OptionQuantity &
        OptionExpiryType &
        OptionYear &
        OptionMonth &
        OptionDay,
    ) => {
      console.log(quantity, origin, expiryType, year, month, day);
      const result = await createTRPCClient(
        origin,
      ).stock.createOrAddQuantity.mutate({
        quantity,
        janCode: code,
        expiryDate: {
          type: expiryType,
          year,
          month,
          day,
        },
      });
      console.log("Added successfully.");
      console.log(result);
    },
  );

program.parse(process.argv);
