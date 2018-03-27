import React from 'react';
import MainBar from './MainBar';
import Movies from './Movies';

const MainBody = ({movies}) => (
  <main>
    <MainBar />
    <Movies movies = {movies}/>
  </main>
)

export default MainBody;