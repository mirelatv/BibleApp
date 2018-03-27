import React from 'react';

const Cartelera = ({image, name}) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
)

export default Cartelera;