import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
  ssl:true,
  sslCA:'/etc/mongo-cert/mongoCA.pem',
  debug: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MoviesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Movies';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Movies', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
