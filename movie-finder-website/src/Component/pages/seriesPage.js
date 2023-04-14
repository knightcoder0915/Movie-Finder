import React,{useState,useEffect} from 'react';
import CinemaService from '../services/apiCinema';
import plus from '../MovieSlider/icons/plus.svg'
import './pages.css'


const SeriesPage = () => {

  const [dataSeries, setDataSeries] = useState([])

  useEffect(() => {
        
      const getDataSeries = new CinemaService()
      function filterByUrl(item) {
          if (item.primaryImage !== null && (item.primaryImage.width < item.primaryImage.height)) {
            return true
          }
        }
      getDataSeries.getSeries()
        .then(item => {
          const data = item.results
          const finalDataSeries = data.filter(filterByUrl)
          setDataSeries(finalDataSeries)
        })
  
  }, []);

    return(
        <div className='wrapper'>
          <h2>Popular Series</h2>
          <div className='cardWrapper'>
              {dataSeries.map((obj,index) => {
              return(
                <div className='card' key={obj.id}>
                <img
                alt={index}
                src={obj.primaryImage.url}>
                </img>
                <div className='titleCard'>{obj.titleText.text}</div>
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

export {
    SeriesPage
}