import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { UsersService } from 'src/users/users.service';

describe('GamesService', () => {
  let service: GamesService;

  const mockUserService = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        { provide: UsersService, useValue: mockUserService },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
