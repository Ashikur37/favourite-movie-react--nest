import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  @IsNotEmpty()
  movieId: number;
}
