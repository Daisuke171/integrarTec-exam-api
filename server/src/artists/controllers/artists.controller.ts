import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { ArtistsService } from '../use-cases/artists.service';
import { CreateArtistsDto } from '../domain/dto/create-user.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return this.artistsService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateArtistsDto) {
    return this.artistsService.create(data);
  }

  @Post('bulk')
  createMany(@Body() artists: CreateArtistsDto[]) {
    return this.artistsService.createMany(artists);
  }

  @Put(':id')
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
    @Body() data: Partial<CreateArtistsDto>,
  ) {
    return this.artistsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.artistsService.delete(id);
  }
}
