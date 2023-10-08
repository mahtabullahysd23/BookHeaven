import React from 'react'
import './DisplayRating.style.scss'
import { BsStarFill,BsStar,BsStarHalf } from 'react-icons/bs'
const DisplayRating = () => {
  return (
    <div className='star-group'>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarHalf/>
        <BsStar/>
        <BsStar/>
    </div>
  )
}

export default DisplayRating