
import React from 'react'
import '../style/loft.scss'
import Rating from '../components/Rating'

function Loft({id, cover, name, rating }) {
  return (
    <div className="stars-container">
      <Rating careType="red" scaleValue={rating} />
    </div>
  )
}

export default Loft
