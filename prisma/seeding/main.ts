// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { seed_roles } from './role.seed';
import { seed_users } from './user.seed';
import { seed_users_roles } from './user_role.seed';


// initialize Prisma Client
const prisma = new PrismaClient();


async function main() {
  // create two dummy articles
  const promises = [
    seed_roles(prisma),
    seed_users(prisma)
  ]
  
  //wait for creating users and roles
  Promise.allSettled(promises)
  .then(() => {
    seed_users_roles(prisma);
  })
  .catch((e:any) => {
    console.log(e)
  })
  
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
