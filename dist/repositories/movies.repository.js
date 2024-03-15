"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MoviesRepository = class MoviesRepository extends repository_1.DefaultCrudRepository {
    aggregateAsync(agg) {
        throw new Error('Method not implemented.');
    }
    aggregate(agg) {
        throw new Error('Method not implemented.');
    }
    constructor(dataSource) {
        super(models_1.Movies, dataSource);
    }
};
exports.MoviesRepository = MoviesRepository;
exports.MoviesRepository = MoviesRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Movies')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MoviesDataSource])
], MoviesRepository);
//# sourceMappingURL=movies.repository.js.map