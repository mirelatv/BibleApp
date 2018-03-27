import React from 'react';
import Cartelera from './Cartelera';

const Movies = ({movies}) => (
  <div className="container">
    <div className="Row">
      {movies.cartelera.map(el => (
        <Cartelera key={el.id} {...el}/>
      ))}
    </div>
  </div>
)

export default Movies;