import './app.css';
import React from 'react';
import MovieSlider from '../MovieSlider/MovieSlider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HorizontalNav from '../horizontalNav/horizontalNav';
import MoviesPage from '../moviesPage/moviesPage';

function App() {
  return (
      <Router>
        <div className='contentContainer'>
          <HorizontalNav />
          <MovieSlider />
          <Routes>
            <Route path='/movies' element={<MoviesPage />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
