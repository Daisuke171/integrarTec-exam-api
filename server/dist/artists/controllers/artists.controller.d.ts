import { ArtistsService } from '../use-cases/artists.service';
import { Artist } from '../domain/entities/artists.entity';
export declare class ArtistsController {
    private readonly artistsService;
    constructor(artistsService: ArtistsService);
    findAll(): Promise<Artist[]>;
    findOne(id: string): Promise<Artist | null>;
    create(data: Omit<Artist, 'id'>): Promise<Artist>;
    createMany(artists: Omit<Artist, 'id'>[]): Promise<Artist[]>;
    update(id: string, data: Partial<Artist>): Promise<Artist | null>;
    delete(id: string): Promise<boolean>;
}
