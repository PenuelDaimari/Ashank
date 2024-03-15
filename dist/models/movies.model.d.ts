import { Entity } from '@loopback/repository';
export declare class Movies extends Entity {
    _id?: string;
    plot?: string;
    genres?: string[];
    runtime?: number;
    cast?: string[];
    num_mflix_comments?: number;
    title?: string;
    fullplot?: string;
    languages?: string[];
    released?: string;
    directors?: string[];
    rated?: string;
    awards?: object;
    lastupdated?: string;
    year?: number;
    imdb?: object;
    countries?: string[];
    type?: string;
    tomatoes?: object;
    constructor(data?: Partial<Movies>);
}
export interface MoviesRelations {
}
export type MoviesWithRelations = Movies & MoviesRelations;
