import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from '../entities/permission.entity';
import { Role } from '../entities/role.entity';
import { RolePermission } from '../entities/role-permission.entity';
import { GrantPermissionDto } from '../dto/grant-permission.dto';

@Injectable()
export class RolePermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(RolePermission)
    private readonly rolePermissionRepository: Repository<RolePermission>,
  ) {}

  async grantPermissionToRole(grantPermissionDto: GrantPermissionDto) {
    const { roleId, privilegeId } = grantPermissionDto;
    const role = await this.roleRepository.findOneBy({ id: roleId });
    const permission = await this.permissionRepository.findOneBy({
      id: privilegeId,
    });

    if (!role || !permission) {
      throw new Error('Role or Permission not found');
    }

    const rolePermission = this.rolePermissionRepository.create({
      role,
      permission,
    });
    return await this.rolePermissionRepository.save(rolePermission);
  }

  async findAll() {
    return await this.rolePermissionRepository.find();
  }

  async findOne(id: number) {
    return await this.rolePermissionRepository.findOneBy({ id });
  }

  async revokePermissionToRole(id: number) {
    const result = await this.rolePermissionRepository.delete(id);
    if (result.affected === 0) {
      return { id };
    }
    return null;
  }
}
