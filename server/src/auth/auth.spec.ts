import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDto, SignInDto } from './dto';

describe('User Controller', () => {
  let controller: AuthController;
  const mockAuthService = {
    signup: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    signin: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };
  const mockPrismaService = {
    cleanDb: jest.fn(() => {
      return {};
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    controller = module.get<AuthController>(AuthController);
    //clean db
    await module.get<PrismaService>(PrismaService).cleanDb();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should signup', () => {
    const authDto: AuthDto = {
      email: 'ashik@gmail.com',
      password: '123456',
      firstName: 'ab',
      lastName: 'cd',
    };
    expect(controller.signup(authDto)).toHaveProperty('email');
  });
  it('should signin', () => {
    const signinDto: SignInDto = {
      email: 'ashik@gmail.com',
      password: '1234567',
    };
    expect(controller.signin(signinDto)).toHaveProperty('emasil');
  });
});
