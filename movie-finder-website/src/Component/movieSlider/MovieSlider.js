import React, { useState,useEffect } from "react"
import './movieSlider.css'
import BtnSlider from './BtnSlider'
import BtnWatchlist from './BtnWatchlist'
import DBSlides from "./sliderDB"

export default function MovieSlider(props) {


    const [dataSlide, setDataSl] = useState([])
    const [slideIndex, setSlideIndex] = useState(1)


   
    useEffect(() => {
      setDataSl(DBSlides);
    }, []);
  
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
                    key={obj.imdbID}
                    className={slideIndex === index + 1? "slide active-anim": "slide"}>
                        <img
                        alt={obj.imdbID}
                        src={obj.Poster}
                        />
                        <div className="filmName">{obj.Title}</div>
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
