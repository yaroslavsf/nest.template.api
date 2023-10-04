import { Role } from "src/roles/role.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany,  } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]
}