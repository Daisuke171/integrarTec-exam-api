import { ShowService } from '../use-cases/shows.service';
import { Show } from '../domain/entities/shows.entity';
export declare class ShowController {
    private readonly showService;
    constructor(showService: ShowService);
    findAll(): Promise<Show[]>;
    findOne(id: string): Promise<Show | null>;
    create(data: Omit<Show, 'id'>): Promise<Show>;
    createMany(shows: Omit<Show, 'id'>[]): Promise<Show[]>;
    update(id: string, data: Partial<Show>): Promise<Show | null>;
    delete(id: string): Promise<boolean>;
}
