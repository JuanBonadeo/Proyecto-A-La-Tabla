import ProductCard from "../ProductCard/ProductCard";
import './productsContainer.css'
import { motion } from "framer-motion";
import React from 'react'


export default function ProductList({ products}) {
  let filteredProducts = [...products];    
  return (
    <>
    <div className='productsContainer'>
        <h2>
          Estos son Nuestros Productos
        </h2>

        <div className="ProductList">
          {filteredProducts.map(product => <ProductCard key={product.id} {...product}/>)}
        </div>
    </div> 
</>
  )
}
