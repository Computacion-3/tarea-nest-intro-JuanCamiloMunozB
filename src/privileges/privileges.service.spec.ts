import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegesService } from './privileges.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Privilege } from './entities/privilege.entity';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOneBy: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('PrivilegesService', () => {
  let service: PrivilegesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrivilegesService,
        {
          provide: getRepositoryToken(Privilege),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PrivilegesService>(PrivilegesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
