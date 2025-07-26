import { Injectable } from '@nestjs/common';
import { ShowRepository } from '../domain/repositories/shows.repository';
import { Show } from '../domain/entities/shows.entity';

@Injectable()
export class ShowService {
  constructor(private readonly showRepository: ShowRepository) {}

  findAll() {
    return this.showRepository.findAll();
  }

  findOne(id: string) {
    return this.showRepository.findOne(id);
  }

  create(data: Omit<Show, 'id'>) {
    return this.showRepository.create(
      new Show({
        name: data.name,
        location: data.location,
        date: data.date,
        artistId: data.artistId,
      }),
    );
  }

  createMany(shows: Omit<Show, 'id'>[]): Promise<Show[]> {
    return Promise.all(
      shows.map((showData) =>
        this.showRepository.create(
          new Show({
            name: showData.name,
            location: showData.location,
            date: showData.date,
            artistId: showData.artistId,
          }),
        ),
      ),
    );
  }

  update(id: string, data: Partial<Show>) {
    return this.showRepository.update(id, data);
  }

  delete(id: string) {
    return this.showRepository.delete(id);
  }
}
