import { DefaultCrudRepository } from '@loopback/repository';
import { MoviesDataSource } from '../datasources';
import { Movies, MoviesRelations } from '../models';
export declare class MoviesRepository extends DefaultCrudRepository<Movies, typeof Movies.prototype._id, MoviesRelations> {
    aggregateAsync(agg: ({
        $search: {
            index: string;
            autocomplete: {
                query: string;
                path: string;
            };
        };
        $limit?: undefined;
        $project?: undefined;
    } | {
        $limit: number;
        $search?: undefined;
        $project?: undefined;
    } | {
        $project: {
            _id: number;
            title: number;
        };
        $search?: undefined;
        $limit?: undefined;
    })[]): void;
    aggregate(agg: ({
        $search: {
            index: string;
            autocomplete: {
                query: string;
                path: string;
            };
        };
        $limit?: undefined;
        $project?: undefined;
    } | {
        $limit: number;
        $search?: undefined;
        $project?: undefined;
    } | {
        $project: {
            _id: number;
            title: number;
        };
        $search?: undefined;
        $limit?: undefined;
    })[]): void;
    constructor(dataSource: MoviesDataSource);
}
