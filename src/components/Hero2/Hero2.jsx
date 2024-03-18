import React from 'react'
import { motion } from "framer-motion"
import './hero2.css'

export default function Hero2() {
  return (
    <div className="hero0Container" >
      
      <img src="fondo.jpg"></img>
      <motion.div className='titles'
      initial={{scale: 0, x: '-100vw'}}
      animate={{scale: 1, x: 0}}
      transition={{duration: 1, ease: "easeInOut", delay: 0.5, type: "spring"}}
    
      >
      <h1 className='title'>A La Tabla</h1>
      <h2 className='subtitle'>La mejor Calidad en Productos de Madera</h2>
      </motion.div>
      
    </div>
  )
}
 