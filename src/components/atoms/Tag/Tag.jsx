import React from 'react'
import './Tag.style.scss'
const Tag = ({text,color}) => {
  return (
    <div style={{backgroundColor:color}} className= "tag"><p>{text}</p></div>
  )
}

export default Tag