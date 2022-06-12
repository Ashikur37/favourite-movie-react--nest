import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto, EditMovieDto } from './dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  async getMovies(userId: number) {
    const movies = await this.prisma.favouriteMovie.findMany({
      where: {
        userId,
      },
    });
    return movies;
  }
  async createMovie(userId: number, dto: CreateMovieDto) {
    const movie = await this.prisma.favouriteMovie.create({
      data: {
        ...dto,
        userId,
      },
    });
    return movie;
  }
  async getMovieById(userId: number, movieId: number) {
    const movie = await this.prisma.favouriteMovie.findFirst({
      where: {
        id: movieId,
        userId,
      },
    });
    return movie;
  }
  async editMovie(userId: number, movieId: number, dto: EditMovieDto) {
    const movie = await this.prisma.favouriteMovie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie || movie.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return await this.prisma.favouriteMovie.update({
      where: {
        id: movieId,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteMovie(userId: number, movieId: number) {
    const movie = await this.prisma.favouriteMovie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie || movie.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return await this.prisma.favouriteMovie.delete({
      where: {
        id: movieId,
      },
    });
  }
}
