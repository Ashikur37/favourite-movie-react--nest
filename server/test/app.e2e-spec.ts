import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import { AuthDto, SignInDto } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';
import { CreateMovieDto, EditMovieDto } from 'src/movie/dto';

describe('app end to end', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  const appUrl = 'http://localhost:3333';
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl(appUrl);
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      const authDto: AuthDto = {
        email: 'ashik@gmail.com',
        password: '123456',
        firstName: 'ab',
        lastName: 'cd',
      };
      describe('Test signup validation', () => {
        it('should throw error if email is empty', () => {
          return pactum
            .spec()
            .post('/auth/signup')
            .withBody({ ...authDto, email: '' })
            .expectStatus(400);
        });
        it('should throw error if password is empty', () => {
          return pactum
            .spec()
            .post('/auth/signup')
            .withBody({ ...authDto, password: '' })
            .expectStatus(400);
        });
        it('should throw error if body empty', () => {
          return pactum.spec().post('/auth/signup').expectStatus(400);
        });
      });
      it('should signup a user', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(authDto)
          .expectStatus(201);
      });
      it('should throw error for signup with existing email', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(authDto)
          .expectStatus(403);
      });
    });
    describe('Signin', () => {
      const signinDto: SignInDto = {
        email: 'ashik@gmail.com',
        password: '123456',
      };
      describe('Test signin validation', () => {
        it('should throw error if email is empty', () => {
          return pactum
            .spec()
            .post('/auth/signin')
            .withBody({ ...signinDto, email: '' })
            .expectStatus(400);
        });
        it('should throw error if password is empty', () => {
          return pactum
            .spec()
            .post('/auth/signin')
            .withBody({ ...signinDto, password: '' })
            .expectStatus(400);
        });
        it('should throw error if body empty', () => {
          return pactum.spec().post('/auth/signin').expectStatus(400);
        });
      });
      it('should signin a user', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(signinDto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });
  describe('User', () => {
    describe('Get current user', () => {
      it('Should return current user ', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
      });
    });
    describe('Edit User', () => {
      const editDto: EditUserDto = {
        firstName: 'piash',
        lastName: 'ashik',
        email: 'hey@gmail.com',
      };
      it('Should edit user ', () => {
        return pactum
          .spec()
          .patch('/users')
          .withBody(editDto)
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBodyContains(editDto.firstName)
          .expectBodyContains(editDto.email);
      });
    });
  });

  describe('Favourite Movies', () => {
    describe('Get Empty Movies', () => {
      it('Should return empty ', () => {
        return pactum
          .spec()
          .get('/movies')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });
    describe('Create Favourite Movies', () => {
      const createMovieDto: CreateMovieDto = {
        name: 'Batman',
        category: 'action',
      };
      it('Should create favourite movie', () => {
        return pactum
          .spec()
          .post('/movies')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(createMovieDto)
          .expectStatus(201)
          .expectBodyContains('action')
          .stores('movieId', 'id');
      });
    });
    describe('Get Favourite Movies', () => {
      it('Should return favourite movies ', () => {
        return pactum
          .spec()
          .get('/movies')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });
    describe('Get Favourite Movie by id', () => {
      it('Should return the specific movie ', () => {
        return pactum
          .spec()
          .get('/movies/{id}')
          .withPathParams({ id: '$S{movieId}' })
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)

          .expectBodyContains('$S{movieId}');
      });
    });
    describe('Edit Favourite Movies', () => {
      const editMovieDto: EditMovieDto = {
        name: 'Spiderman',
        category: 'action',
      };
      it('Should edit the movie ', () => {
        return pactum
          .spec()
          .patch('/movies/{id}')
          .withPathParams({ id: '$S{movieId}' })
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(editMovieDto)
          .expectStatus(200)
          .expectBodyContains('Spiderman')
          .expectBodyContains('$S{movieId}');
      });
    });
    describe('Delete Favourite Movies', () => {
      it('Should delete the movie ', () => {
        return pactum
          .spec()
          .delete('/movies/{id}')
          .withPathParams({ id: '$S{movieId}' })
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(204);
      });
      it('Should return empty ', () => {
        return pactum
          .spec()
          .get('/movies')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200)
          .expectBody([])
          .expectJsonLength(0);
      });
    });
  });
});
