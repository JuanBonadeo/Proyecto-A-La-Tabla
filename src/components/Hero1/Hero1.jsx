import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return(
        <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src="/hero1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption HeroCaption1'>
            <h3>Productos Nobles para todos los domingos</h3>
            <Button to='#' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 fix-image"
            src="/image9.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption HeroCaption1'>
            <h3>Productos Nobles para todos los domingos</h3>
            <Button to='#' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src="/image0.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption HeroCaption1'>
            <h3>Productos Nobles para todos los domingos</h3>
            <Button to='#' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 

       
      </Carousel>
      

    )
}
export default Hero1