"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// import {MongoClient} from 'mongodb';
let MoviesController = class MoviesController {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    // @post('/movies')
    // @response(200, {
    //   description: 'Movies model instance',
    //   content: {'application/json': {schema: getModelSchemaRef(Movies)}},
    // })
    // async create(
    //   @requestBody({
    //     content: {
    //       'application/json': {
    //         schema: getModelSchemaRef(Movies, {
    //           title: 'NewMovies',
    //           exclude: ['_id'],
    //         }),
    //       },
    //     },
    //   })
    //   movies: Omit<Movies, '_id'>,
    // ): Promise<Movies> {
    //   return this.moviesRepository.create(movies);
    // }
    async count(where) {
        return this.moviesRepository.count(where);
    }
    // @response(200, {
    //   description: 'Array of Movies model instances',
    //   content: {
    //     'application/json': {
    //       schema: {
    //         type: 'array',
    //         items: getModelSchemaRef(Movies, {includeRelations: true}),
    //       },
    //     },
    //   },
    // })
    async findMovies(title) {
        //define pipeline
        const agg = [
            { $search: { index: "autocomplete-tutorial", autocomplete: { query: title, path: "title" } } },
            { $limit: 20 },
            { $project: { _id: 0, title: 1 } }
        ];
        const result = await this.moviesRepository.aggregate(agg);
        return result;
    }
    // @patch('/movies')
    // @response(200, {
    //   description: 'Movies PATCH success count',
    //   content: {'application/json': {schema: CountSchema}},
    // })
    // async updateAll(
    //   @requestBody({
    //     content: {
    //       'application/json': {
    //         schema: getModelSchemaRef(Movies, {partial: true}),
    //       },
    //     },
    //   })
    //   movies: Movies,
    //   @param.where(Movies) where?: Where<Movies>,
    // ): Promise<Count> {
    //   return this.moviesRepository.updateAll(movies, where);
    // }
    async findById(id, filter) {
        return this.moviesRepository.findById(id, filter);
    }
};
exports.MoviesController = MoviesController;
tslib_1.__decorate([
    (0, rest_1.get)('/movies/count'),
    (0, rest_1.response)(200, {
        description: 'Movies model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Movies)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MoviesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/movies')
    // @response(200, {
    //   description: 'Array of Movies model instances',
    //   content: {
    //     'application/json': {
    //       schema: {
    //         type: 'array',
    //         items: getModelSchemaRef(Movies, {includeRelations: true}),
    //       },
    //     },
    //   },
    // })
    ,
    tslib_1.__param(0, rest_1.param.query.string('title')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MoviesController.prototype, "findMovies", null);
tslib_1.__decorate([
    (0, rest_1.get)('/movies/{id}'),
    (0, rest_1.response)(200, {
        description: 'Movies model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Movies, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Movies, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MoviesController.prototype, "findById", null);
exports.MoviesController = MoviesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MoviesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MoviesRepository])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map