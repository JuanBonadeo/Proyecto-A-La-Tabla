import React from 'react'
import { useEffect } from 'react'
import './productInfo.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCard'



export default function ProductInfo({id, nombre, precio, img1,img2,img3, descripcion }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='productInfoContainer'>
      <img src={img1} alt='product'className='infoImg'/>
      <div className="information">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <div className="priceAddto">
          <p>Precio: {precio}$</p>
          <Button label='Agregar al Carrito'/>
        </div>
        <div className="infoPayment">
          <p>Metodos de Pago</p>
          <div className="paymentMethods">
            <img src='mastercard.png' alt='Mastercard'/>
            <img src='paypal.png' alt='paypal'/>
          </div>
        </div>
        <div className="envios">Envios a Todo el Pais <LocalShippingIcon/></div>
      </div>
    </div>
    <div className="otherProductsContainer">
      <h2>Productos Relacionados</h2>
      <div className="otherProducts">
        <ProductCard name="Juego de 20 tablas"img="image0.jpeg"/>
        <ProductCard name="Juego de 20 tablas"img="image6.jpeg"/>
        <ProductCard name="Juego de 20 tablas"img="image7.jpeg"/>
      </div>
    </div>
    </>
    
  )
}
