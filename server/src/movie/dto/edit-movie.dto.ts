import { IsNotEmpty, IsNumber } from 'class-validator';

export class EditMovieDto {
  @IsNumber()
  @IsNotEmpty()
  movieId: number;
}
