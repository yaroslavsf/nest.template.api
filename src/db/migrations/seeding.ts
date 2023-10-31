import { MigrationInterface, QueryRunner } from "typeorm";

export class Seeding1696410272383 implements MigrationInterface {
    name =  'Seeding1696410272383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // $2b$10$SlklXqi8qBt5SlMll4cqJu9B8Z3M30ASeBIVZ0sEDJPHv8lAxnS. - QWE123
        await queryRunner.query(`INSERT INTO role("id", "name") VALUES ('6425e34a-3bfb-4789-a4e0-c4568b5f4a4d', 'admin'), ('d517cb4b-38f1-4f63-92f3-06b7c5ae5cda', 'user')`);
        await queryRunner.query(`INSERT INTO users("id", "name", "surname", "password", "email") VALUES ('b92a3fde-3f3c-4727-a357-a8dd0e066f26', 'admin', 'admin', '$2b$10$SlklXqi8qBt5SlMll4cqJu9B8Z3M30ASeBIVZ0sEDJPHv8lAxnS.C', 'admin@gmail.com'), ('87605317-2e2a-4214-8339-053c061586f5', 'user', 'user', '$2b$10$SlklXqi8qBt5SlMll4cqJu9B8Z3M30ASeBIVZ0sEDJPHv8lAxnS.C', 'user@gmail.com')`);
        await queryRunner.query(`INSERT INTO users_roles_role("usersId", "roleId") VALUES  ('b92a3fde-3f3c-4727-a357-a8dd0e066f26', '6425e34a-3bfb-4789-a4e0-c4568b5f4a4d'), ('87605317-2e2a-4214-8339-053c061586f5', 'd517cb4b-38f1-4f63-92f3-06b7c5ae5cda')`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Delete records from the linking table first
        await queryRunner.query(`DELETE FROM users_roles_role WHERE "usersId" = 'b92a3fde-3f3c-4727-a357-a8dd0e066f26' OR "usersId" = '87605317-2e2a-4214-8339-053c061586f5'`);
        // Delete records from the "user" table
        await queryRunner.query(`DELETE FROM users WHERE "id" = 'b92a3fde-3f3c-4727-a357-a8dd0e066f26' OR "id" = '87605317-2e2a-4214-8339-053c061586f5'`);

        // Delete records from the "role" table
        await queryRunner.query(`DELETE FROM role WHERE "id" = '6425e34a-3bfb-4789-a4e0-c4568b5f4a4d' OR "id" = 'd517cb4b-38f1-4f63-92f3-06b7c5ae5cda'`);
    }
}
