import React from 'react'
import './productInfo.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../Button/Button';

export default function ProductInfo() {
  return (
    <div className='productInfoContainer'>
      <img src='image2.jpeg' alt='product'className='infoImg'/>
      <div className="information">
        <h1>Product Name</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ea voluptatem error nobis. Vitae iure possimus quis sapiente eveniet alias voluptate, eum assumenda est mollitia! Debitis quam aspernatur fuga ut?</p>
        <div className="priceAddto">
          <p>Price: 100.000$</p>
          <Button label='Agregar al Carrito'/>
        </div>
        <div className="infoPayment">
          <p>Metodos de Pago</p>
          <div className="paymentMethods">
            <img src='visa.png' alt='Mercado Pago'/>
            <img src='mastercard.png' alt='Mastercard'/>
            <img src='paypal.png' alt='paypal'/>
          </div>
        </div>
        <div className="envios">Envios a Todo el Pais <LocalShippingIcon/></div>
      </div>
      
      
    
    
    </div>
  )
}
