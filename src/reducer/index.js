import { combineReducers } from 'redux'
import MoviesReducer from './Movies-Reducer'


const rootReducer = combineReducers({
  cartelera: MoviesReducer,
  
})


export default rootReducer

