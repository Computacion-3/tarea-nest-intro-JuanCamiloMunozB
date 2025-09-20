import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegesController } from './privileges.controller';
import { PrivilegesService } from './privileges.service';

describe('PrivilegesController', () => {
  let controller: PrivilegesController;
  const mockPrivilegesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivilegesController],
      providers: [
        { provide: PrivilegesService, useValue: mockPrivilegesService },
      ],
    }).compile();

    controller = module.get<PrivilegesController>(PrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
