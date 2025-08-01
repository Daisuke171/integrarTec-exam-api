import { ShowRepository } from 'src/shows/domain/repositories/shows.repository';
import { CreateShowsDto } from 'src/shows/domain/dto/create-shows.dto';
export declare class ShowPrismaRepository implements ShowRepository {
    private prisma;
    findAll(): Promise<CreateShowsDto[]>;
    findOne(id: string): Promise<CreateShowsDto | null>;
    create(show: CreateShowsDto): Promise<CreateShowsDto>;
    createMany(shows: CreateShowsDto[]): Promise<CreateShowsDto[]>;
    update(id: string, show: Partial<CreateShowsDto>): Promise<CreateShowsDto | null>;
    delete(id: string): Promise<boolean>;
}
