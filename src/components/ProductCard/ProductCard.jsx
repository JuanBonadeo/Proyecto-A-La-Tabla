import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import { CartContext } from '../../context/CartContext';

import AddToCartIcon from '../AddtoCartIcon.js/AddToCartIcon';

export default function ProductCard({nombre,img1,img2,img3,precio,id}) {
  const useCart = () => {
    return useContext(CartContext)
  }
  const { addItem, quantity, formatearMoneda} = useCart();
  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, nombre, precio, quantity, img1,img2,img3
    }
    addItem(productToAdd)
  } 
  return (
    <div className='productCardContainer'>
      <Link to={`/producto/${id}`}><img src={img1} alt={`${nombre}`} loading='lazy' className='imgProduct'/></Link>
      <div className="cardInfo">
        <div className="namePrice">
          <h4>{nombre}</h4>
          <span>{formatearMoneda(precio)}</span>
        </div>
        
        <AddToCartIcon onAdd={handleOnAdd}/>
      </div>
      
    </div>
  )
}
