import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { Permission } from './entities/permission.entity';
import { PermissionsController } from './controllers/permissions.controller';
import { RolePermissionsController } from './controllers/role-permission.controller';
import { PermissionsService } from './services/permissions.service';
import { RolePermissionsService } from './services/role-permission.service';
import { RolePermission } from './entities/role-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission, RolePermission])],
  controllers: [
    RolesController,
    PermissionsController,
    RolePermissionsController,
  ],
  providers: [RolesService, PermissionsService, RolePermissionsService],
  exports: [RolesService, PermissionsService, RolePermissionsService],
})
export class RolesModule {}
