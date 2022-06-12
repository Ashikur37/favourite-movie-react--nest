import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
          // url: 'postgresql://dev:1234@localhost:5434/movie_dev?schema=public',
        },
      },
    });
  }
  cleanDb() {
    return this.$transaction([
      this.favouriteMovie.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
