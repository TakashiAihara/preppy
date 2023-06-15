import { PrismaClient } from "@prisma/client";

// HACK: support multi file
import janSiteSeeds from "./seeds/janSite";
import postSeeds from "./seeds/post";

const prisma = new PrismaClient();

async function main() {
	await Promise.all(
		janSiteSeeds.map(async (seed) => {
			await prisma["janSite"].upsert({
				where: { id: seed.id },
				update: {},
				create: {
					...seed,
				},
			});
		}),
	);

	await Promise.all(
		postSeeds.map(async (seed) => {
			await prisma["post"].upsert({
				where: { id: seed.id },
				update: {},
				create: {
					...seed,
				},
			});
		}),
	);

	//   const bob = await prisma.user.upsert({
	//     where: { email: "bob@prisma.io" },
	//     update: {},
	//     create: {
	//       email: "bob@prisma.io",
	//       name: "Bob",
	//       posts: {
	//         create: [
	//           {
	//             title: "Follow Prisma on Twitter",
	//             content: "https://twitter.com/prisma",
	//             published: true,
	//           },
	//           {
	//             title: "Follow Nexus on Twitter",
	//             content: "https://twitter.com/nexusgql",
	//             published: true,
	//           },
	//         ],
	//       },
	//     },
	//   });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
