import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
 import Swal from 'sweetalert2';

const Cart = () => {
  const useCart = () => {
    return useContext(CartContext)
}
  const { cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart } = useCart();
 

  const buyCart = () => {
    Swal.fire({
      title: 'Confirmar compra',
      text: '¿Estás seguro de que deseas realizar la compra?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, comprar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        let mensajePedido = 'Hola, este es mi pedido:\n\n';
        cart.forEach((prod) => {
          mensajePedido += `${prod.nombre} - Cantidad: ${
            prod.quantity
          } - Precio: $${prod.precio * prod.quantity}\n`;
        });
        mensajePedido += `\nTotal: $${total}\n`;

        // Completar con el número de WhatsApp
        const numeroWhatsApp = '543412524906';

        function esDispositivoMovil() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        
        // Construir la URL de WhatsApp
        let urlWhatsApp = '';
        
        if (esDispositivoMovil()) {
          // Si es un dispositivo móvil, abrir en la aplicación de WhatsApp
          urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
        } else {
          // Si es una computadora, abrir en WhatsApp Web
          urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
        }
        
        // Abrir la ventana de chat
        window.open(urlWhatsApp, '_blank');
        window.open(urlWhatsApp, '_blank');
        clearCart();
      } else {
        Swal.fire('', 'Changes are not saved', 'info');
      }
    });
  };
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
                                <DeleteOutlineIcon className='delete' onClick={() => removeItem(prod.id)}></DeleteOutlineIcon>
                            </div>
                        )
                    })
                }
            </div>
      <div className="btnTotal">
        <h5>Total de la compra ${total}</h5>
        <Button action={() => clearCart()} label="Vaciar Carrito"/>    
        <Button action={() => buyCart()} label="Comprar"/>    
      </div>
            

    </div>
  )
}

export default Cart


