import React from 'react';

const Cartelera = ({image, name}) => (
  <figure className="col-6 asdasdadsd">
    <img src={image} alt={name} className="img-fluid"/>
    <figcaption className="colorBlue font-weight-bold">{name}</figcaption>
  </figure>
)

export default Cartelera;