import React,{useState,useEffect} from 'react';
import CinemaService from '../services/apiCinema';
import plus from '../MovieSlider/icons/plus.svg'
import './pages.css'


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
          setDataMovies(finalDataMovies)
        })
  
  }, []);

    return(
        <div className='wrapper'>
          <h2>Popular Movies</h2>
          <div className='cardWrapper'>
              {dataMovies.map((obj,index) => {
              return(
                <div className='card' key={obj.id}>
                <img
                alt={index}
                src={obj.primaryImage.url}>
                </img>
                <div className='titleCard'>{obj.titleText.text}</div>
                <div className='btn-onCard'
                // onClick={}
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
export { 
  MoviesPage
}