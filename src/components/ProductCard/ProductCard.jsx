import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './ProductCard.css'

export default function ProductCard(prop) {
  return (
    <div className='productCardContainer'>
      <img src={prop.img} alt='product' className='imgProduct'/>
      <div className="cardInfo">
        <div className="namePrice">
          <h4>{prop.name}</h4>
          <span>$100.000</span>
        </div>
        
        <button className={`carrito `}>
                <p className='carritoCounter'>+</p>
                <ShoppingBagOutlinedIcon fontSize='large' color='info'/>   
        </button>
      </div>
      
    </div>
  )
}
