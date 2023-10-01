import { PrismaClient } from "@prisma/client";

export async function seed_roles(prisma: PrismaClient) {
    //admin
    await prisma.role.upsert({
        where: { id : "05dfb276-12d1-4952-92d6-d7235bad8486"},
        update: {},
        create: {
          id : "05dfb276-12d1-4952-92d6-d7235bad8486",
          name: 'admin',
        },
      });

    //user
    await prisma.role.upsert({
    where: { id : "354f4234-b967-4c88-881f-b5a87d94407b"},
    update: {},
    create: {
      id : "354f4234-b967-4c88-881f-b5a87d94407b",
        name: 'user',
    },
    });
}
