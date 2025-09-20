import { Module } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { PrivilegesController } from './privileges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Privilege } from './entities/privilege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege])],
  controllers: [PrivilegesController],
  providers: [PrivilegesService],
  exports: [PrivilegesService],
})
export class PrivilegesModule {}
