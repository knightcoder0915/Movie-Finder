import React from 'react'
import plus from './icons/plus.svg'


export default function BtnWatchlist() {
  return (
    <div className='btn-onSlide'
    // onClick={toggleBtn}
    >
        <img alt="btn-plus" src={plus} />
        <div
        className='btn-watch'
        >
        Watchlist
        </div>
    </div>
  )
}
