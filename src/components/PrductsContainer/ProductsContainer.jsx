import React from 'react'
import './productsContainer.css'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductsContainer() {
  return (
    <div className='productsContainer'>
        <h2>Estos son Nuestros Productos</h2>
        <div className="ProductList">
          <ProductCard name="Juego de 20 tablas"img="./image2.jpeg"/>
          
          <ProductCard name="Juego de 20 tablas"img="./image5.jpg"/>
          <ProductCard name="Juego de 20 tablas"img="./image7.jpeg"/>
          <ProductCard name="Juego de 20 tablas"img="./image0.jpeg"/>
          <ProductCard name="Juego de 20 tablas"img="./image2.jpeg"/>
          <ProductCard name="Juego de 20 tablas"img="./image3.jpeg"/>
        </div>
        
    </div>
  )
}
