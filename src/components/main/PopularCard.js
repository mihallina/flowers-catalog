import React from 'react'
import { Link } from 'react-router-dom'
import './PopularCard.css'

const PopularCard = ({url, text, slug}) => {
  return (
    <Link to={`/category/${slug}`} className='popularCard'>
        <div className='popularCard-block'>
            <img src={url} alt={text} className='popularCard-img' />
            <p className='popularCard-name'>{text}</p>
        </div>
    </Link>
  )
}

export default PopularCard