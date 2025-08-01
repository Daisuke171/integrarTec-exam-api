import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateShowsDto {
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @IsString()
  @Length(2)
  name: string;

  @IsString()
  @Length(2)
  location: string;

  @IsDate()
  date: Date;

  @IsArray()
  @IsUUID('4', { each: true })
  artistId: string[];

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
