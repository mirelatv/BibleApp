import React from 'react';
import Movies from './Movies';

const MainBody = ({datamovies}) => (
  <main>
    <ContainerTab />
    <Movies datamovies = {datamovies}/>
  </main>
)

export default MainBody;