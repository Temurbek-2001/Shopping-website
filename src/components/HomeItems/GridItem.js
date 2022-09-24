import React from 'react'
import "./GridItem.css"
import starb from '../.././assets/logo.jpeg'
import Button from '../../layout/Button'

function GridItem({item, clickHandler}) {
  const {id,title,author, price ,img}=item
  return (
    <div className="gridItem">
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={starb} className="flipImage"></img>
    </div>
    <div className="flip-card-back">
      <img src={img}/>
      <h1>{title}</h1> 
      <p>{author}</p> 
      <p>Price: {price}$</p>
      <Button title='Add' clicked={()=>clickHandler(item)}> <i class='fa fa-cart-arrow-down'></i></Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default GridItem