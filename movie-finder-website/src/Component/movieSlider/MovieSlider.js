import React, {useState} from 'react'
import './movieslider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlide'
import BtnWatchlist from './BtnWatchlist'

export default function MovieSlider() {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1)
    }else{
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if(slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }else{
      setSlideIndex(slideIndex - 1)
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <div className='container-slider'>
        {dataSlider.map((obj, index)=> {
            return (
                <div
                key={obj.id}
                className={slideIndex === index + 1? "slide active-anim": "slide"}>
                    <img
                    alt={obj.id}
                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                     />
                     <div className="filmName">{obj.title}</div>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className='container-dots'>
          {Array.from({length: dataSlider.length}).map((item,index) => (
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
