import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import './loader.css'

export const Loader = () => {
  return (
    <div className='loaderContainer'>
    <Button variant="dark" className='loader' disabled>
        <Spinner
          as="span"
          size="xl"
          role="status"
          aria-hidden="true"
        />
        <span>Loading...</span>
      </Button>
    </div>
    
  )
}
