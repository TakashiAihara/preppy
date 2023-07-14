import * as fs from "fs";
import { extname } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const seedsDir = "seeds";

const findSeedsFiles = () =>
  fs
    .readdirSync(seedsDir, {
      encoding: "utf8",
      withFileTypes: true,
    })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

const applySeed = async (seed: any, schemaName: string) => {
  const prim = seed.id ? "id" : "code";
  console.log(`Applying seed for ${schemaName} with primary key ${seed[prim]}`);

  // @ts-ignore
  await prisma[schemaName].create({
    data: seed,
  });
};

const applySeeds = async (seeds: any, schemaName: string) => {
  await seeds.map(async (seed: any) => {
    applySeed(seed, schemaName);
  });
};

const applySeedsFile = async (seedsFile: string) => {
  const schemaName = seedsFile
    .replace(extname(seedsFile), "")
    .replace(/^\d{3}_/, "");

  console.log(schemaName);

  const seedsJson = fs.readFileSync(`${seedsDir}/${seedsFile}`, "utf8");
  const seeds = JSON.parse(seedsJson);
  await applySeeds(seeds, schemaName);
};

async function applySeedsFiles(seedsFiles: string[]) {
  await Promise.all(
    seedsFiles.map(async (seedsFile) => {
      await applySeedsFile(seedsFile);
    }),
  );
}

applySeedsFiles(findSeedsFiles())
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
