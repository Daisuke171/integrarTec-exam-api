import { ArtistRepository } from '../domain/repository/artists.repository';
import { Artist } from '../domain/entities/artists.entity';
import { CreateArtistsDto } from '../domain/dto/create-user.dto';
export declare class ArtistsService {
    private readonly artitsRepository;
    constructor(artitsRepository: ArtistRepository);
    findAll(): Promise<Artist[]>;
    findOne(id: string): Promise<Artist | null>;
    create(data: Omit<CreateArtistsDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<Artist>;
    createMany(data: Omit<CreateArtistsDto, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<Artist[]>;
    update(id: string, data: Partial<CreateArtistsDto>): Promise<Artist | null>;
    delete(id: string): Promise<boolean>;
}
