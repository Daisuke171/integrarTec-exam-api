import { ShowRepository } from '../domain/repositories/shows.repository';
import { Show } from '../domain/entities/shows.entity';
import { CreateShowsDto } from '../domain/dto/create-shows.dto';
export declare class ShowService {
    private readonly showRepository;
    constructor(showRepository: ShowRepository);
    findAll(): Promise<Show[]>;
    findOne(id: string): Promise<Show | null>;
    create(data: CreateShowsDto): Promise<Show>;
    createMany(shows: CreateShowsDto[]): Promise<CreateShowsDto[]>;
    update(id: string, data: Partial<CreateShowsDto>): Promise<Show | null>;
    delete(id: string): Promise<boolean>;
}
