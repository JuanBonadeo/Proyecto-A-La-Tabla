import ProductCard from "../ProductCard/ProductCard";
import './productsContainer.css'

import React from 'react'

export default function ProductList({ products}) {
    let filteredProducts = [...products];
    console.log(filteredProducts)
    
  return (
    <>
    <div className='productsContainer'>
        <h2>Estos son nuestros productos</h2>
        <div className="ProductList">
          {filteredProducts.map(product => <ProductCard key={product.id} {...product}/>)}
        </div>
    </div> 
</>
  )
}
