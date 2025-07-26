import { Artist } from '../entities/artists.entity';

export abstract class ArtistRepository {
  abstract findAll(): Promise<Artist[]>;
  abstract findOne(id: string): Promise<Artist | null>;
  abstract create(loan: Omit<Artist, 'id'>): Promise<Artist>;
  abstract update(id: string, data: Partial<Artist>): Promise<Artist | null>;
  abstract delete(id: string): Promise<boolean>;
}
