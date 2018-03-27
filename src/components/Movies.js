import React from 'react';
import Cartelera from './Cartelera';

const Movies = ({datamovies}) => (
  <div className="row">
    {datamovies.cartelera.map(el => (
      <Cartelera key={el.id} {...el}/>
    ))}
  </div>
)

export default Movies;