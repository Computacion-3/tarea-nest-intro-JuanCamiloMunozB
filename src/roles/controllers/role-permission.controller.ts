import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RolePermissionsService } from '../services/role-permission.service';
import { GrantPermissionDto } from '../dto/grant-permission.dto';

@Controller('roles-permissions')
export class RolePermissionsController {
  constructor(
    private readonly rolePermissionsService: RolePermissionsService,
  ) {}

  @Post()
  create(@Body() grantPermissionDto: GrantPermissionDto) {
    return this.rolePermissionsService.grantPermissionToRole(
      grantPermissionDto,
    );
  }

  @Get()
  findAll() {
    return this.rolePermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolePermissionsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolePermissionsService.revokePermissionToRole(+id);
  }
}
