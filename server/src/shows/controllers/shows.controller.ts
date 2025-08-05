import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShowService } from '../use-cases/shows.service';
import { CreateShowsDto } from '../domain/dto/create-shows.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shows')
@UseGuards(AuthGuard)
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
  create(@Body() data: CreateShowsDto) {
    return this.showService.create(data);
  }

  @Post('bulk')
  createMany(@Body() shows: CreateShowsDto[]) {
    return this.showService.createMany(shows);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateShowsDto>) {
    return this.showService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.showService.delete(id);
  }
}
