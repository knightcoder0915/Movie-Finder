import React,{useState,useEffect} from 'react';
import CinemaService from '../services/apiCinema';
import plus from '../MovieSlider/icons/plus.svg'
import './moviesPage.css'


const MoviesPage = () => {

  const [dataMovies, setDataMovies] = useState([])

  useEffect(() => {
        
      const getDataMovies = new CinemaService()
      function filterByUrl(item) {
          if (item.primaryImage !== null && (item.primaryImage.width < item.primaryImage.height)) {
            return true
          }
        }
      getDataMovies.getMovies()
        .then(item => {
          const data = item.results
          const finalDataMovies = data.filter(filterByUrl)
          console.log(finalDataMovies)
          setDataMovies(finalDataMovies)
        })
  
  }, []);

    return(
        <div className='wrapper'>
          <h2>Popular Movies</h2>
          <div className='moviesWrapper'>
              {dataMovies.map((obj,index) => {
              return(
                <div className='movieCard' key={obj.id}>
                <img
                alt={index}
                src={obj.primaryImage.url}>
                </img>
                <div className='titleMovie'>{obj.titleText.text}</div>
                <div className='btn-onCard'
                onClick={(item) => {
                  console.log(obj.id)
                }}
                >
                    <div className='btnWrap'>
                      <img alt="btn-plus" src={plus} />
                      <div
                      className='btn-watch'
                      >
                      Watchlist
                      </div>
                    </div>
                </div>
              </div>
              )
              })}
          </div>
        </div>
    )
}
export default MoviesPage