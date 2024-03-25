import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return(
        <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='../../images/hero1.jpg'
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption '>
            <h3>Revolucionamos el Asado Argentino</h3>
            <Button to='/productos' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='../../images/hero2.jpeg'
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption'>
            <h3>Productos Nobles para todos los Domingos</h3>
            <Button to='/productos' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='../../images/hero2.jpeg'
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption'>
            <h3 className='lasth3'>Descubrí el secreto de los grandes asadores con nuestra selección exclusiva.</h3>
            <Button to='/productos' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 

      </Carousel>
      

    )
}
export default Hero1