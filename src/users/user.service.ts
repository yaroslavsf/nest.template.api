import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
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
    return  this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    const user: User = await this.userRepository.findOne({ where: { id: id }});
    if (!user) {
        throw new NotFoundException("user with this id not exist")
    }

    return user;
  }

  async findByEmail(email: string) : Promise<User> {
    return this.userRepository.findOne({where: {email: email}});
  }

  async create(user: Partial<User>): Promise<User> {
      if (await this.findByEmail(user.email)) {
        throw new ConflictException("user already exist")
      }
      const userRole : Role = await this.roleService.findByName('user');
      if (!userRole) {
        throw new NotFoundException("role:user not found")
      }
      return await this.userRepository.save({
       ...user,
       roles: [userRole]
     });
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}