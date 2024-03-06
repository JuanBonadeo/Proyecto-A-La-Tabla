import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {
  const useCart = () => {
    return useContext(CartContext)
}
  const { cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart } = useCart();
  const buyCart = () => {
    Swal.fire({
      title: 'Deseas de borrar el carrito?',
      showCancelButton: true,
      confirmButtonText: 'Limpiar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire('',"redireccionando a WhatsApp", 'info')
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
      } else  {
        Toast.fire('','Changes are not saved', 'info')
      }
    })
    
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
                                <DeleteOutlineIcon className='delete' onClick={() => removeItem(prod.id)}></DeleteOutlineIcon>
                            </div>
                        )
                    })
                }
            </div>
      <div className="btnTotal">
        <h5>Total de la compra ${total}</h5>
        <Button action={() => clearCart()} label="Limpiar Carrito"/>    
        <Button action={() => buyCart()} label="Comprar"/>    
      </div>
            

    </div>
  )
}

export default Cart


