import { ArtistsService } from '../use-cases/artists.service';
import { CreateArtistsDto } from '../domain/dto/create-user.dto';
export declare class ArtistsController {
    private readonly artistsService;
    constructor(artistsService: ArtistsService);
    findAll(): Promise<import("../domain/entities/artists.entity").Artist[]>;
    findOne(id: string): Promise<import("../domain/entities/artists.entity").Artist | null>;
    create(data: CreateArtistsDto): Promise<import("../domain/entities/artists.entity").Artist>;
    createMany(artists: CreateArtistsDto[]): Promise<import("../domain/entities/artists.entity").Artist[]>;
    update(id: string, data: Partial<CreateArtistsDto>): Promise<import("../domain/entities/artists.entity").Artist | null>;
    delete(id: string): Promise<boolean>;
}
