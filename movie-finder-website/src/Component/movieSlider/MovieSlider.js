import React, { useEffect, useState } from "react"
import './movieSlider.css'
import BtnSlider from './BtnSlider'
import BtnWatchlist from './BtnWatchlist'

export default function MovieSlider(props) {

    const [dataSlide, setUsers] = useState([])
    const [slideIndex, setSlideIndex] = useState(1)
  
    const fetchData = async () => {
      const response = await fetch("https://api.kinopoisk.dev/v1/movie?sortField=rating.kp&page=1&type=movie&year=2019-2023",{
            method: 'GET',
            headers: {
                'X-API-KEY': 'WR1E3SY-XJD4YEZ-Q5H5BYP-75Q2J6H',
                'Content-Type': 'application/json'
            }
        })
    .then(item => item.json())
      const dataSlide = await response.docs
      setUsers(dataSlide)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
   

    const nextSlide = () => {
      if(slideIndex !== dataSlide.length){
        setSlideIndex(slideIndex + 1)
      }else{
        setSlideIndex(1)
      }
    }
    const prevSlide = () => {
      if(slideIndex === 1){
        setSlideIndex(dataSlide.length)
      }else{
        setSlideIndex(slideIndex - 1)
      }
    }

    const moveDot = (index) => {
      setSlideIndex(index)
    }

    return (
      <div className='container-slider'>
          {dataSlide.map((obj, index)=> {
              return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1? "slide active-anim": "slide"}>
                        <img
                        alt={obj.id}
                        src={obj.poster.url}
                        />
                        <div className="filmName">{obj.name}</div>
                    </div>
                )
            })}
          <BtnSlider moveSlide={nextSlide} direction={"next"}/>
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

          <div className='container-dots'>
            {Array.from({length: dataSlide.length}).map((item,index) => (
              <div
              className={slideIndex === index + 1? "dot active": "dot"}
              onClick={() => moveDot(index + 1)}>

              </div>
            ))}
          </div>
          <BtnWatchlist />
      </div>
    )
  }
