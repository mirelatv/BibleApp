import { combineReducers } from 'redux';
// import MoviesReducer from './Movies-Reducer';
import dataMovies from './dataMovies';
import infoReducer from './info-reducer'


const rootReducer = combineReducers({
  datamovies: dataMovies,
  info: infoReducer,
})

export default rootReducer

