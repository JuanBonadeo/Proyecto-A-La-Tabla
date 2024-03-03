import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'


const Cart = () => {
  const useCart = () => {
    return useContext(CartContext)
}
  const { cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart } = useCart();
  const buyCart = () => {
    let mensajePedido = "Hola, este es mi pedido:\n\n";
    
    cart.forEach((prod) => {
      mensajePedido += `${prod.nombre} - Cantidad: ${
        prod.quantity
      } - Precio: $${prod.precio * prod.quantity}\n`;
    });
    mensajePedido += `\nTotal: $${total}\n`;
    
    // Completar con el número de WhatsApp
    const numeroWhatsApp = "543412524906";
    
    // Abrir la ventana de chat de WhatsApp con el mensaje del carrito
    const urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensajePedido
    )}`;
    window.open(urlWhatsApp, "_blank");
    clearCart()
  }
  return (
    <div className='cartContainer'>
      <h1>Carrito</h1>
      <div className='cartItems'>
                {
                 cart.map(prod => {
                        return (       
                            <div className='productInCart' key={prod.id}>
                                <Link to={`/producto/${prod.id}`}><img className="" src={prod.img1}></img>  </Link> 
                                <h4>{prod.nombre}</h4>
                                <div className="info">
                                  <p>Cantidad: {prod.quantity}</p>
                                  <p>Precio x unidad: ${prod.precio}</p>
                                  <p>Precio total: ${prod.quantity * prod.precio}</p>
                                </div>
                                <button onClick={() => removeItem(prod.id)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
      <div className="btnTotal">
        <Button action={() => clearCart()} label="Limpiar Carrito"/>    
        <Button action={() => buyCart()} label="Comprar"/>    
        <h4>Total de la compra ${total}</h4>
      </div>
            

    </div>
  )
}

export default Cart


