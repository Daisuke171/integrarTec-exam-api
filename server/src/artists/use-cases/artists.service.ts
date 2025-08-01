import { Injectable } from '@nestjs/common';
import { ArtistRepository } from '../domain/repository/artists.repository';
import { Artist } from '../domain/entities/artists.entity';
import { CreateArtistsDto } from '../domain/dto/create-user.dto';

@Injectable()
export class ArtistsService {
  constructor(private readonly artitsRepository: ArtistRepository) {}

  findAll() {
    return this.artitsRepository.findAll();
  }

  findOne(id: string) {
    return this.artitsRepository.findOne(id);
  }

  create(data: Omit<CreateArtistsDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.artitsRepository.create(
      new Artist({
        name: data.name,
        members: data.members,
        origin: data.origin,
        genres: data.genres,
        image: data.image,
        status: data.status,
      }),
    );
  }

  createMany(
    data: Omit<CreateArtistsDto, 'id' | 'createdAt' | 'updatedAt'>[],
  ): Promise<Artist[]> {
    return Promise.all(
      data.map((artistData) =>
        this.artitsRepository.create(
          new Artist({
            name: artistData.name,
            members: artistData.members,
            origin: artistData.origin,
            genres: artistData.genres,
            image: artistData.image,
            status: artistData.status,
          }),
        ),
      ),
    );
  }

  update(id: string, data: Partial<CreateArtistsDto>) {
    return this.artitsRepository.update(id, data);
  }

  delete(id: string) {
    return this.artitsRepository.delete(id);
  }
}
