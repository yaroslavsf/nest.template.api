import { Injectable } from '@nestjs/common';
import { Role } from './role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findById(id: string): Promise<Role> {
    return this.roleRepository.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<Role> {
    return this.roleRepository.findOne({where: {name}})
  }

  async create(role: Partial<Role>): Promise<Role> {
    const newrole = this.roleRepository.create(role);
    return this.roleRepository.save(newrole);
  }

  async update(id: string, role: Partial<Role>): Promise<Role> {
    await this.roleRepository.update(id, role);
    return this.roleRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
