import { PrismaClient } from "@prisma/client";

// HACK: support multi file
import janOriginSiteSeeds from "./seeds/janSite";

const prisma = new PrismaClient();

const name = "janOriginSite";

async function main() {
	await Promise.all(
		janOriginSiteSeeds.map(async (seed) => {
			await prisma[name].upsert({
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
