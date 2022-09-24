import React from 'react'
import Portal from '../../layout/Portal'
import './Cart.css'

function Cart({cart}) {
  
   
  return (
    <Portal>
      <div className='container'>
      {
        cart.map((item)=>(
          <div className='cart' key={item.id}>
            <img src={item.img}/>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <h5>{item.price}</h5>
          </div>
          
          
        ))
      }
      </div>
      </Portal>

  )
}

export default Cart