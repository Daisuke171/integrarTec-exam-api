import { Show } from '../entities/shows.entity';
export declare abstract class ShowRepository {
    abstract findAll(): Promise<Show[]>;
    abstract findOne(id: string): Promise<Show | null>;
    abstract create(loan: Omit<Show, 'id'>): Promise<Show>;
    abstract update(id: string, data: Partial<Show>): Promise<Show | null>;
    abstract delete(id: string): Promise<boolean>;
    abstract createMany(shows: Omit<Show, 'id'>[]): Promise<Show[]>;
}
