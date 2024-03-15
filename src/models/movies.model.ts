import {Entity, model, property} from '@loopback/repository';

@model()
export class Movies extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  plot?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  genres?: string[];

  @property({
    type: 'number',
  })
  runtime?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  cast?: string[];

  @property({
    type: 'number',
  })
  num_mflix_comments?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  fullplot?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  languages?: string[];

  @property({
    type: 'date',
  })
  released?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  directors?: string[];

  @property({
    type: 'string',
  })
  rated?: string;

  @property({
    type: 'object',
  })
  awards?: object;

  @property({
    type: 'string',
  })
  lastupdated?: string;

  @property({
    type: 'number',
  })
  year?: number;

  @property({
    type: 'object',
  })
  imdb?: object;

  @property({
    type: 'array',
    itemType: 'string',
  })
  countries?: string[];

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'object',
  })
  tomatoes?: object;


  constructor(data?: Partial<Movies>) {
    super(data);
  }
}

export interface MoviesRelations {
  // describe navigational properties here
}

export type MoviesWithRelations = Movies & MoviesRelations;
