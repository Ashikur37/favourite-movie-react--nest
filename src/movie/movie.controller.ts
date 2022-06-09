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
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateMovieDto, EditMovieDto } from './dto';
import { MovieService } from './movie.service';

@UseGuards(JwtGuard)
@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get()
  getMovies(@GetUser('id') userId: number) {
    return this.movieService.getMovies(userId);
  }

  @Post()
  createMovie(@GetUser('id') userId: number, @Body() dto: CreateMovieDto) {
    return this.movieService.createMovie(userId, dto);
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
