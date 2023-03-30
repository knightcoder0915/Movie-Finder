import React from 'react'
import leftArrow from './icons/prev.svg'
import rightArrow from './icons/next.svg'
// import dataSlider from './dataSlide'


export default function BtnSlider ({direction,moveSlide}) {
    let io = 0
  return (
    <div>
        <div
        onClick={moveSlide}
        className={direction === 'next'? 'btn-slide next': 'btn-slide prev'}>
            <img 
            alt={`sda${io++}`}
            src={direction === 'next'? rightArrow: leftArrow} />
        </div>
    </div>
  )
}
