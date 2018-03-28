import React from 'react';
import Cartelera from './Cartelera';

const Movies = ({datamovies, activeTab}) => (
  <div className="container mt-3">
    <div className="row">
      {datamovies[activeTab].map(el => (
        <Cartelera key={el.id} {...el}/>
      ))}
    </div>
  </div>
)

export default Movies;