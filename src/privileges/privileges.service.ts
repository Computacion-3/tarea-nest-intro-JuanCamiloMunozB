import { Injectable } from '@nestjs/common';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { In, Repository } from 'typeorm';
import { Privilege } from './entities/privilege.entity';

@Injectable()
export class PrivilegesService {
  constructor(private readonly privilegeRepository: Repository<Privilege>) {}

  async create(createPrivilegeDto: CreatePrivilegeDto) {
    const newPrivilege = this.privilegeRepository.create(createPrivilegeDto);
    return await this.privilegeRepository.save(newPrivilege);
  }

  async findAll() {
    return await this.privilegeRepository.find();
  }

  async findOne(id: number) {
    return await this.privilegeRepository.findOneBy({ id });
  }

  async update(id: number, updatePrivilegeDto: UpdatePrivilegeDto) {
    await this.privilegeRepository.update(id, updatePrivilegeDto);
    return await this.privilegeRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const result = await this.privilegeRepository.delete(id);
    if (result.affected === 0) {
      return { id };
    }
    return null;
  }

  async findManyByIds(ids: number[]) {
    return await this.privilegeRepository.find({
      where: { id: In(ids) },
    });
  }
}
