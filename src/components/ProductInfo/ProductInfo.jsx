import React from 'react'
import { useEffect, useState} from 'react'
import './productInfo.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../Button/Button';
import Carousel from 'react-bootstrap/esm/Carousel'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export default function ProductInfo({id, nombre, precio, img1,img2,img3, descripcion }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
   };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='productInfoContainer'>
    <Carousel  activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
                <Carousel.Item interval={10000}>
                 <img className="infoImg" src={img1}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={10000}>
                 <img className="infoImg" src={img2}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={10000}>
                 <img className="infoImg" src={img3}></img>   
                </Carousel.Item>
      </Carousel>
      <div className="information">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <div className="priceAddto">
          <h5>Precio: {precio}$</h5>
          <Button label='Agregar al Carrito'/>
        </div>
        <div className="infoPayment">
          <h5>Metodos de Pago</h5>
          <div className="paymentMethods">
            <AccountBalanceIcon/>
            <CreditCardIcon/>
            <LocalAtmIcon/>
          </div>
        </div>
        <div className="envios"><h5>Envios a Todo el Pais </h5><LocalShippingIcon/></div>
      </div>
    </div>

    </>
    
  )
}
