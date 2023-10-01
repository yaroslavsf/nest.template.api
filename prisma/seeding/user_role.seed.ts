import { PrismaClient } from "@prisma/client";

export async function seed_users_roles(prisma: PrismaClient) {
    //admin
    await prisma.rolesOnUsers.upsert({
        create: {
            userId: "c95b6672-e29d-481b-bbb0-8f1d7e665a78",
            roleId: "354f4234-b967-4c88-881f-b5a87d94407b"
        },
        where: { 
            userId_roleId: {
                userId: "c95b6672-e29d-481b-bbb0-8f1d7e665a78",
                roleId: "354f4234-b967-4c88-881f-b5a87d94407b"
            }
        },
        update: {}, 
      });

    //user
    await prisma.rolesOnUsers.upsert({
        create: {
            userId: "4114bd79-2eed-4ac1-afb2-7b59fd274576",
            roleId: "05dfb276-12d1-4952-92d6-d7235bad8486"
        },
        where: { 
            userId_roleId: {
                userId: "4114bd79-2eed-4ac1-afb2-7b59fd274576",
                roleId: "05dfb276-12d1-4952-92d6-d7235bad8486"
            }
        },
        update: {},
      });
}
