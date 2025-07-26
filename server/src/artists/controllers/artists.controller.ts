import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ArtistsService } from '../use-cases/artists.service';
import { Artist } from '../domain/entities/artists.entity';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Post()
  create(@Body() data: Omit<Artist, 'id'>) {
    return this.artistsService.create(data);
  }

  @Post('bulk')
  createMany(@Body() artists: Omit<Artist, 'id'>[]) {
    return this.artistsService.createMany(artists);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Artist>) {
    return this.artistsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.artistsService.delete(id);
  }
}
