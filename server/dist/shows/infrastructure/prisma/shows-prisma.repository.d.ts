import { Show } from 'src/shows/domain/entities/shows.entity';
import { ShowRepository } from 'src/shows/domain/repositories/shows.repository';
export declare class ShowPrismaRepository implements ShowRepository {
    private prisma;
    findAll(): Promise<Show[]>;
    findOne(id: string): Promise<Show | null>;
    create(show: Show): Promise<Show>;
    createMany(shows: Show[]): Promise<Show[]>;
    update(id: string, show: Partial<Show>): Promise<Show | null>;
    delete(id: string): Promise<boolean>;
}
