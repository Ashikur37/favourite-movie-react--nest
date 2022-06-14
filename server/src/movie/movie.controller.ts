import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MovieQueryDto } from 'src/auth/dto';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { FavouriteMovieDto, EditMovieDto } from './dto';
import { MovieService } from './movie.service';

@UseGuards(JwtGuard)
@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get()
  getMovies(@GetUser('id') userId: number, @Query() query: MovieQueryDto) {
    console.log(query);
    return this.movieService.getMovies(userId, query);
  }

  @Post('favourite')
  favouriteMovie(
    @GetUser('id') userId: number,
    @Body() dto: FavouriteMovieDto,
  ) {
    return this.movieService.favouriteMovie(userId, dto);
  }

  @Get(':id')
  getMovieById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) movieId: number,
  ) {
    return this.movieService.getMovieById(userId, movieId);
  }

  @Patch(':id')
  editMovie(
    @GetUser('id') userId: number,
    @Body() dto: EditMovieDto,
    @Param('id', ParseIntPipe) movieId: number,
  ) {
    return this.movieService.editMovie(userId, movieId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteMovie(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) movieId: number,
  ) {
    return this.movieService.deleteMovie(userId, movieId);
  }
}
