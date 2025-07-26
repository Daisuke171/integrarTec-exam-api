export declare class Show {
    id?: string;
    name: string;
    location: string;
    date: Date;
    artistId: string[];
    createdAt?: Date;
    updatedAt?: Date;
    constructor(data: Partial<Show>);
}
