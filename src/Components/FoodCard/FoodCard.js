import React from 'react'
import "./FoodCard.css"
import vegIcon from "./veg.png"
import nonvegIcon from "./nonveg.png"

function FoodCard({imgUrl,title,description,isveg,price}) {
  return (
 
    <div className='food-card'>
      <img src={imgUrl}  className='card-img'/>
      <h1 className='title'>{title}</h1>
       <p>{description}</p>
       <img  className="food-card-icon"  src={isveg ? vegIcon :nonvegIcon}  alt="icon"/>
       {
         price ?
          <p className='price'>
          ₹{price} 
          </p> : null
       }
       <button type='button' className='card-button'> Add to card</button>
 </div>

   
  )
}

export default FoodCard