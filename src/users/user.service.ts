import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import {User} from './user.entity';
import {RoleService} from "../roles/roles.service";
import {Role} from "../roles/role.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private roleService: RoleService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    await this.roleService.findByName('USER')
        .then((data: Role) => {
          newUser.roles.push(data)
        })
        .catch(() => {
          throw new Error("user role doesn't exist");
        })
    return this.userRepository.save(newUser);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}