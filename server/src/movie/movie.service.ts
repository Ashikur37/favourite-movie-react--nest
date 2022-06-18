import { ForbiddenException, Injectable } from '@nestjs/common';
import { MovieQueryDto } from 'src/auth/dto';
import { PrismaService } from '../prisma/prisma.service';
import { FavouriteMovieDto, EditMovieDto } from './dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  async getMovies(userId: number, query: MovieQueryDto) {
    const limit = +query.limit || 10;
    const page = +query.page || 1;
    const sortBy = query.sortBy || 'title';
    const type = query.type || 'asc';
    const favouriteMovieIds = await this.prisma.favouriteMovie.findMany({
      where: {
        userId,
      },
      select: {
        movieId: true,
      },
    });
    const favouriteMovieIdsArray = favouriteMovieIds.map(
      (movie) => movie.movieId,
    );

    const totalResult = await this.prisma.movie.count({
      where:
        query.favourite != 'all'
          ? {
              title: {
                contains: query.search || '',
                mode: 'insensitive',
              },
              id:
                query.favourite == 'true'
                  ? {
                      in: favouriteMovieIdsArray,
                    }
                  : {
                      notIn: favouriteMovieIdsArray,
                    },
            }
          : {
              title: {
                contains: query.search || '',
                mode: 'insensitive',
              },
            },
    });

    const movies = await this.prisma.movie.findMany({
      where:
        query.favourite != 'all'
          ? {
              title: {
                contains: query.search || '',
                mode: 'insensitive',
              },
              id:
                query.favourite == 'true'
                  ? {
                      in: favouriteMovieIdsArray,
                    }
                  : {
                      notIn: favouriteMovieIdsArray,
                    },
            }
          : {
              title: {
                contains: query.search || '',
                mode: 'insensitive',
              },
            },
      include: {
        favouriteMovies: {
          where: {
            userId,
          },
        },
      },

      orderBy: {
        [sortBy]: type,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      movies: movies.map((movie) => {
        return {
          ...movie,
          favourite: movie.favouriteMovies.length > 0,
        };
      }),
      count: totalResult,
    };
  }
  async favouriteMovie(userId: number, dto: FavouriteMovieDto) {
    const favouriteMovie = await this.prisma.favouriteMovie.findFirst({
      where: {
        userId,
        movieId: dto.movieId,
      },
    });
    if (favouriteMovie) {
      await this.prisma.favouriteMovie.delete({
        where: {
          id: favouriteMovie.id,
        },
      });
      return {
        favourite: false,
        msg: 'Movie removed from favourites',
      };
    } else {
      await this.prisma.favouriteMovie.create({
        data: {
          ...dto,
          userId,
        },
      });
      return {
        favourite: true,
        msg: 'Movie added to favourites',
      };
    }
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
