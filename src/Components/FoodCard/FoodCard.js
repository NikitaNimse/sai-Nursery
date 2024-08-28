import React from 'react'
import "./FoodCard.css"
import vegIcon from "./veg.png"
import nonvegIcon from "./nonveg.png"
import {THEME} from "../../config/data.js"

function FoodCard({imgUrl,title,description,isveg,price}) {
  return (
 
    <div className='food-card'>
      <img src={imgUrl}  className='card-img'/>
      <h1 className='title' style={{color:THEME.highlight,margin:0,padding:0}}>{title}</h1>
       <p>{description}</p>
       
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