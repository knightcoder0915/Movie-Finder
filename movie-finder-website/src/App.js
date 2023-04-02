import './App.css';
import React from 'react';
import HorizontalNav from './Component/Navbar/horizontalNav/horizontalNavbar';
import MovieSlider from './Component/movieSlider/MovieSlider';
import { Route,Routes } from 'react-router-dom';
import Movie from './Component/Pages/movie';
import TvShows from './Component/Pages/tvShows';
import Cartoon from './Component/Pages/cartoon';

function App() {
  return (
    <body>
      <HorizontalNav />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MovieSlider />} />
          <Route path='/movies' element={<Movie />} />
          <Route path='/tv' element={<TvShows />} />
          <Route path='/cartoon' element={<Cartoon />} />
        </Routes>

      </div>
      // <MovieSlider />
    </body>
  );
}

export default App;
