import { IsOptional, IsString } from 'class-validator';

export class EditMovieDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  category: string;
}
