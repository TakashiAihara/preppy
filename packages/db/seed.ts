import { PrismaClient } from "@prisma/client";

import * as fs from "fs";
import { extname } from "path";

const prisma = new PrismaClient();
const seedsDir = "seeds"

const findSeedsFiles = () => (
	fs.readdirSync(seedsDir, {
		encoding: "utf8",
		withFileTypes: true
	}).filter(e => e.isFile()).map(e => e.name)
)

const applySeed = async (seed: any, schemaName: string) => {
	const prim = seed.id ? "id" : "code"
	console.log(`Applying seed for ${schemaName} with primary key ${seed[prim]}`)

	// @ts-ignore TODO: fix this type define
	await prisma[schemaName].upsert({
		where: { [prim]: seed[prim] },
		update: {},
		create: seed,
	})
}

const applySeeds = async (seeds: any, schemaName: string) => {
	await seeds.map(async (seed: any) => {
		applySeed(seed, schemaName)
	})
}

const applySeedsFile = async (seedsFile: string) => {
	const schemaName = seedsFile.replace(extname(seedsFile), "")
	const seeds = JSON.parse(fs.readFileSync(`${seedsDir}/${seedsFile}`, "utf8"))
	await applySeeds(seeds, schemaName)
}

async function applySeedsFiles(seedsFiles: string[]) {
	await Promise.all(
		seedsFiles.map(async (seedsFile) => {
			await applySeedsFile(seedsFile)
		})
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
