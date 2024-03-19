import ProductCard from "../ProductCard/ProductCard";
import './productsContainer.css'
import { motion } from "framer-motion";
import React from 'react'


export default function ProductList({ products}) {
  let filteredProducts = [...products];    
  return (
    <>
    <div className='productsContainer'>
        <motion.h1
        initial={{scale: 0, x: '-100vw'}}
        animate={{scale: 1, x: 0}}
        transition={{duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring"}}
        >
          Estos son Nuestros Productos
        </motion.h1>

        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 1.5, ease: "easeInOut", delay: 0.6, type: "spring"}}
        className="ProductList">
          {filteredProducts.map(product => <ProductCard key={product.id} {...product}/>)}
        </motion.div>
    </div> 
</>
  )
}
