"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Movies',
    connector: 'mongodb',
    url: 'mongodb+srv://Penuel:XvljqlDftAvUdrir@cluster0.vkl91q6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/sample_mflix/movies',
    host: 'mongo',
    port: 27017,
    user: 'Penuel',
    password: 'XvljqlDftAvUdrir',
    database: 'sample_mflix',
    useNewUrlParser: true,
    ssl: true,
    sslCA: '/etc/mongo-cert/mongoCA.pem',
    debug: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MoviesDataSource = class MoviesDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.MoviesDataSource = MoviesDataSource;
MoviesDataSource.dataSourceName = 'Movies';
MoviesDataSource.defaultConfig = config;
exports.MoviesDataSource = MoviesDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Movies', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MoviesDataSource);
//# sourceMappingURL=movies.datasource.js.map