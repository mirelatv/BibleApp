import React from 'react';
import ContainerTab from '../containers/ContainerTab';
import Movies from './Movies';

const MainBody = ({datamovies}) => (
  <main className="container">
    <ContainerTab />
    <Movies datamovies = {datamovies}/>
  </main>
)

export default MainBody;