import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Movies } from '../models';
import { MoviesRepository } from '../repositories';
export declare class MoviesController {
    moviesRepository: MoviesRepository;
    constructor(moviesRepository: MoviesRepository);
    count(where?: Where<Movies>): Promise<Count>;
    findMovies(title: string): Promise<any>;
    findById(id: string, filter?: FilterExcludingWhere<Movies>): Promise<Movies>;
}
