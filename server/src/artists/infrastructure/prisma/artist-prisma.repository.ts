import { Injectable } from '@nestjs/common';
import { Artist } from 'src/artists/domain/entities/artists.entity';
import { PrismaClient } from 'generated/prisma';
import { ArtistRepository } from 'src/artists/domain/repository/artists.repository';

@Injectable()
export class ArtistPrismaRepository implements ArtistRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<Artist[]> {
    const artists = await this.prisma.artist.findMany();
    return artists.map(
      (a) =>
        new Artist({
          ...a,
          members: a.members ? a.members.split(',') : [],
        }),
    );
  }

  async findOne(id: string): Promise<Artist | null> {
    const a = await this.prisma.artist.findUnique({ where: { id } });
    if (!a) return null;
    return new Artist({
      ...a,
      members: a.members ? a.members.split(',') : [],
    });
  }

  async create(artist: Artist): Promise<Artist> {
    const created = await this.prisma.artist.create({
      data: {
        ...artist,
        members: artist.members.join(','),
      },
    });
    return new Artist({
      ...created,
      members: created.members ? created.members.split(',') : [],
    });
  }

  async createMany(artists: Artist[]): Promise<Artist[]> {
    const createdArtists: Artist[] = [];

    for (const artist of artists) {
      const created = await this.prisma.artist.create({
        data: {
          ...artist,
          members: artist.members.join(','),
        },
      });

      createdArtists.push(
        new Artist({
          ...created,
          members: created.members ? created.members.split(',') : [],
        }),
      );
    }

    return createdArtists;
  }

  async update(id: string, data: Partial<Artist>): Promise<Artist | null> {
    const updated = await this.prisma.artist.update({
      where: { id },
      data: {
        ...data,
        members: data.members ? data.members.join(',') : undefined,
      },
    });
    return new Artist({
      ...updated,
      members: updated.members ? updated.members.split(',') : [],
    });
  }

  async delete(id: string): Promise<boolean> {
    const artist = await this.findOne(id);
    if (!artist) return false;
    await this.prisma.artist.delete({ where: { id } });
    return true;
  }
}
