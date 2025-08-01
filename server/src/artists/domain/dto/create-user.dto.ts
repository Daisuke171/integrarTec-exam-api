import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsArray,
  IsBoolean,
  IsOptional,
  MinLength,
  Matches,
  Length,
} from 'class-validator';

export class CreateArtistsDto {
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsString()
  @Length(2)
  name: string;

  @IsArray()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  @Matches(/\S/, { each: true })
  members: string[];

  @IsString()
  @Length(2)
  @Matches(/\S/)
  origin: string;

  @IsString()
  @Length(2)
  @Matches(/\S/)
  genres: string;

  @IsString()
  @Length(2)
  @Matches(/\S/)
  image: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
