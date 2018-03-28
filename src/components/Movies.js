import React from 'react';
import Cartelera from './Cartelera';

const Movies = ({datamovies, activeTab,}) => (
  <div className="row">
  
    {datamovies[activeTab].map(el => (
      <Cartelera key={el.id} img={el.image}{...el}/>
      
    ))}
   
  </div>
)

export default Movies;