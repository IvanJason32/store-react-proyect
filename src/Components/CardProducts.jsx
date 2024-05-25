import React from 'react'
import './CardProducts.css'

const CardProducts = (props) => {
  return (
    <div className='card_product'>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <p>{`$${props.price}.00`}</p>
    </div>
  )
}

export default CardProducts