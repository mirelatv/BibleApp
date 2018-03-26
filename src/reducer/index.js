import { combineReducers } from 'redux'
import Moviesreducer from './Movies-reducer'


const rootReducer = combineReducers({
  movies: Moviesreducer,
  
})

export default rootReducer