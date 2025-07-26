import { ShowRepository } from '../domain/repositories/shows.repository';
import { Show } from '../domain/entities/shows.entity';
export declare class ShowService {
    private readonly showRepository;
    constructor(showRepository: ShowRepository);
    findAll(): Promise<Show[]>;
    findOne(id: string): Promise<Show | null>;
    create(data: Omit<Show, 'id'>): Promise<Show>;
    createMany(shows: Omit<Show, 'id'>[]): Promise<Show[]>;
    update(id: string, data: Partial<Show>): Promise<Show | null>;
    delete(id: string): Promise<boolean>;
}
