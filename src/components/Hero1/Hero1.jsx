import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return(
        <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/alatabla-6a973.appspot.com/o/hero1.jpg?alt=media&token=3d2dd9b7-6b19-49c0-887b-8728ce668a66'
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption '>
            <h3>Revolucionamos el Asado Argentino</h3>
            <Button to='/productos' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/alatabla-6a973.appspot.com/o/hero2.jpeg?alt=media&token=ec065c3d-b043-47a1-8f49-bcbf5ee743f7'
            alt="Second-slide"
          />
          <Carousel.Caption className='HeroCaption'>
            <h3>Productos Nobles para todos los Domingos</h3>
            <Button to='/productos' label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/alatabla-6a973.appspot.com/o/hero3.jpeg?alt=media&token=e4986f99-fa19-454c-b3ac-c02409d301d3'
            alt="Third-slide"
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