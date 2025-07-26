import { ArtistRepository } from '../domain/repository/artists.repository';
import { Artist } from '../domain/entities/artists.entity';
export declare class ArtistsService {
    private readonly artitsRepository;
    constructor(artitsRepository: ArtistRepository);
    findAll(): Promise<Artist[]>;
    findOne(id: string): Promise<Artist | null>;
    create(data: Omit<Artist, 'id'>): Promise<Artist>;
    createMany(data: Omit<Artist, 'id'>[]): Promise<Artist[]>;
    update(id: string, data: Partial<Artist>): Promise<Artist | null>;
    delete(id: string): Promise<boolean>;
}
