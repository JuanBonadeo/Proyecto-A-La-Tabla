import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loader.css'

export const Loader = () => {
  return (
    <div className='loaderContainer'>
    <div variant="dark" className='loader' disabled>
        <Spinner
          as="span"
          size="xl"
          role="status"
          aria-hidden="true"
        />
        <span>Cargando...</span>
      </div>
    </div>
    
  )
}
