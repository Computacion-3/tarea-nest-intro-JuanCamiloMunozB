import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { UsersService } from '../users/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';

describe('GamesService', () => {
  let service: GamesService;

  const mockUserService = {
    findOne: jest.fn(),
  };

  const mockGameRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        { provide: UsersService, useValue: mockUserService },
        { provide: getRepositoryToken(Game), useValue: mockGameRepository },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
