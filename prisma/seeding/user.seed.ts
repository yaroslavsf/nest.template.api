import { PrismaClient } from "@prisma/client";

export async function seed_users(prisma: PrismaClient) {
    //ben
    await prisma.user.upsert({
        where: { id : "c95b6672-e29d-481b-bbb0-8f1d7e665a78"},
        update: {},
        create: {
            id : "c95b6672-e29d-481b-bbb0-8f1d7e665a78",
          email: "ben@gmail.com",
          name: "ben",
          surname: "ben",
        },
      });

    //yarik
    await prisma.user.upsert({
    where: { id : "4114bd79-2eed-4ac1-afb2-7b59fd274576"},
    update: {},
    create: {
        id : "4114bd79-2eed-4ac1-afb2-7b59fd274576",
        email: "yarik@gmail.com",
        name: "yarik",
        surname: "yarik",
    },
    });
}
