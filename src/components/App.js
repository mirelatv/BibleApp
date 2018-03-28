import React from 'react';
import Splash from './Splash';
import ContainerSlider from '../containers/ContainerSlider';
import ContainerTab from '../containers/ContainerTab';
import ContainerMovies from '../containers/ContainerMovies';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <div>
    <Splash />
    <ContainerSlider/>
    <Header />
    <ContainerTab/>
    <ContainerMovies />
    <Footer />
  </div>
);


export default App;
