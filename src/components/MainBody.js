import React from 'react';
import MainBar from './MainBar';
import Movies from './Movies';

const MainBody = ({datamovies}) => (
  <main className="container">
    <MainBar />
    <Movies datamovies = {datamovies}/>
  </main>
)

export default MainBody;