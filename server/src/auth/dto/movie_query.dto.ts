import { IsNumber, IsOptional, IsString } from 'class-validator';
export class MovieQueryDto {
  @IsString()
  @IsOptional()
  limit: number;
  @IsOptional()
  @IsString()
  page: number;
  @IsOptional()
  @IsString()
  filter: any;
  @IsOptional()
  @IsString()
  sortBy: string;
  @IsOptional()
  @IsString()
  type: string;
  @IsOptional()
  @IsString()
  search: string;
}
