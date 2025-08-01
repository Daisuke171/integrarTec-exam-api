import { ShowService } from '../use-cases/shows.service';
import { CreateShowsDto } from '../domain/dto/create-shows.dto';
export declare class ShowController {
    private readonly showService;
    constructor(showService: ShowService);
    findAll(): Promise<import("../domain/entities/shows.entity").Show[]>;
    findOne(id: string): Promise<import("../domain/entities/shows.entity").Show | null>;
    create(data: CreateShowsDto): Promise<import("../domain/entities/shows.entity").Show>;
    createMany(shows: CreateShowsDto[]): Promise<CreateShowsDto[]>;
    update(id: string, data: Partial<CreateShowsDto>): Promise<import("../domain/entities/shows.entity").Show | null>;
    delete(id: string): Promise<boolean>;
}
