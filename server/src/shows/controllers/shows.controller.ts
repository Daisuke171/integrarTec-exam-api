import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ShowService } from '../use-cases/shows.service';
import { Show } from '../domain/entities/shows.entity';

@Controller('shows')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  @Get()
  findAll() {
    return this.showService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showService.findOne(id);
  }

  @Post()
  create(@Body() data: Omit<Show, 'id'>) {
    return this.showService.create(data);
  }

  @Post('bulk')
  createMany(@Body() shows: Omit<Show, 'id'>[]) {
    return this.showService.createMany(shows);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Show>) {
    return this.showService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.showService.delete(id);
  }
}
