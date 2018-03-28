import React from 'react';
import Splash from './Splash';
import ContainerSlider from '../containers/ContainerSlider';
import ContainerTab from '../containers/ContainerTab';
import ContainerMovies from '../containers/ContainerMovies';

const App = () => (
  <div>
    <Splash />
    <ContainerSlider/>
    <ContainerTab/>
    <ContainerMovies />
  </div>
);


export default App;
