import { Injectable } from '@nestjs/common';
import { Show } from 'src/shows/domain/entities/shows.entity';
import { PrismaClient } from 'generated/prisma';
import { ShowRepository } from 'src/shows/domain/repositories/shows.repository';
import { CreateShowsDto } from 'src/shows/domain/dto/create-shows.dto';

@Injectable()
export class ShowPrismaRepository implements ShowRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<CreateShowsDto[]> {
    const shows = await this.prisma.show.findMany({
      include: {
        artists: {
          include: {
            artist: true,
          },
        },
      },
    });

    return shows.map(
      (s) =>
        new Show({
          ...s,
          artistId: s.artists.map((sa) => sa.artistId),
        }),
    );
  }

  async findOne(id: string): Promise<CreateShowsDto | null> {
    const show = await this.prisma.show.findUnique({
      where: { id },
      include: {
        artists: {
          include: {
            artist: true,
          },
        },
      },
    });

    if (!show) return null;

    return new Show({
      ...show,
      artistId: show.artists.map((sa) => sa.artistId),
    });
  }

  async create(show: CreateShowsDto): Promise<CreateShowsDto> {
    const created = await this.prisma.show.create({
      data: {
        id: show.id,
        name: show.name,
        location: show.location,
        date: show.date,
        artists: {
          create: show.artistId.map((artistId) => ({
            artist: {
              connect: { id: artistId },
            },
          })),
        },
      },
      include: {
        artists: true,
      },
    });

    return new Show({
      ...created,
      artistId: created.artists.map((sa) => sa.artistId),
    });
  }

  async createMany(shows: CreateShowsDto[]): Promise<CreateShowsDto[]> {
    const createdShows: Show[] = [];

    for (const show of shows) {
      const created = await this.prisma.show.create({
        data: {
          id: show.id,
          name: show.name,
          location: show.location,
          date: show.date,
          artists: {
            create: show.artistId.map((artistId) => ({
              artist: {
                connect: { id: artistId },
              },
            })),
          },
        },
        include: {
          artists: true,
        },
      });

      createdShows.push(
        new Show({
          ...created,
          artistId: created.artists.map((sa) => sa.artistId),
        }),
      );
    }

    return createdShows;
  }

  async update(
    id: string,
    show: Partial<CreateShowsDto>,
  ): Promise<CreateShowsDto | null> {
    await this.prisma.showArtist.deleteMany({ where: { showId: id } });

    const updated = await this.prisma.show.update({
      where: { id },
      data: {
        name: show.name,
        location: show.location,
        date: show.date,
        artists: show.artistId
          ? {
              create: show.artistId.map((artistId) => ({
                artist: {
                  connect: { id: artistId },
                },
              })),
            }
          : undefined,
      },
      include: {
        artists: true,
      },
    });

    return new Show({
      ...updated,
      artistId: updated.artists.map((sa) => sa.artistId),
    });
  }

  async delete(id: string): Promise<boolean> {
    return await this.prisma.show
      .delete({ where: { id } })
      .then(() => true)
      .catch(() => false);
  }
}
