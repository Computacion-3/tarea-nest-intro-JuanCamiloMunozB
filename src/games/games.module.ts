import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [UsersModule, TypeOrmModule.forFeature([Game])],
  exports: [GamesService],
})
export class GamesModule {}
