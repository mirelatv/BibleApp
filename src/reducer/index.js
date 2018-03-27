import { combineReducers } from 'redux';
import MoviesReducer from './Movies-Reducer';
import dataMovies from './dataMovies';

const rootReducer = combineReducers({
  cartelera: MoviesReducer,
  datamovies: dataMovies  
})

export default rootReducer

