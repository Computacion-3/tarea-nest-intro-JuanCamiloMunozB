import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly gamesRepository: Repository<Game>,
    private userService: UsersService,
  ) {}

  async create(createGameDto: CreateGameDto) {
    const user = await this.userService.findOne(createGameDto.createdById);
    if (!user) {
      throw new Error('User not found');
    }
    const game = this.gamesRepository.create({
      ...createGameDto,
      createdBy: user,
    });
    return this.gamesRepository.save(game);
  }

  async findAll() {
    return await this.gamesRepository.find();
  }

  async findOne(id: number) {
    return await this.gamesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    await this.gamesRepository.update(id, updateGameDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.gamesRepository.delete(id);
    if (result.affected) {
      return { id };
    }
    return null;
  }
}
