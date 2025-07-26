export declare class Artist {
    id?: string;
    name: string;
    members: string[];
    origin: string;
    genres: string;
    image: string;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(data: Partial<Artist>);
}
