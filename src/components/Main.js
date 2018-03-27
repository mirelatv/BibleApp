import React from 'react';
import Header from './Header';
import MainBody from './MainBody';

const Main = ({movies}) => (
  <div>
    <Header />
    <MainBody movies = {movies}/>
  </div>
)

export default Main;