import { ArtistRepository } from 'src/artists/domain/repository/artists.repository';
import { CreateArtistsDto } from 'src/artists/domain/dto/create-user.dto';
export declare class ArtistPrismaRepository implements ArtistRepository {
    private prisma;
    findAll(): Promise<CreateArtistsDto[]>;
    findOne(id: string): Promise<CreateArtistsDto | null>;
    create(artist: CreateArtistsDto): Promise<CreateArtistsDto>;
    createMany(artists: CreateArtistsDto[]): Promise<CreateArtistsDto[]>;
    update(id: string, data: Partial<CreateArtistsDto>): Promise<CreateArtistsDto | null>;
    delete(id: string): Promise<boolean>;
}
