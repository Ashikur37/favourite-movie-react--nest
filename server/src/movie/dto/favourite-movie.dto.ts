import { IsNotEmpty, IsNumber } from 'class-validator';

export class FavouriteMovieDto {
  @IsNumber()
  @IsNotEmpty()
  movieId: number;
}
