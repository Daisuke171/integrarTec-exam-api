import { Artist } from 'src/artists/domain/entities/artists.entity';
import { ArtistRepository } from 'src/artists/domain/repository/artists.repository';
export declare class ArtistPrismaRepository implements ArtistRepository {
    private prisma;
    findAll(): Promise<Artist[]>;
    findOne(id: string): Promise<Artist | null>;
    create(artist: Artist): Promise<Artist>;
    createMany(artists: Artist[]): Promise<Artist[]>;
    update(id: string, data: Partial<Artist>): Promise<Artist | null>;
    delete(id: string): Promise<boolean>;
}
