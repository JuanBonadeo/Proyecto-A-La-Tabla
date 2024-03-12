import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
 import Swal from 'sweetalert2';
import QuantityControl from '../QuantityControl/QuantityControl'
import { AnimatePresence, motion } from "framer-motion"

const Cart = () => {
  const useCart = () => {
    return useContext(CartContext)
}
  const { cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart, updateQuantity,updateQuantitySelect, formatearMoneda } = useCart();
  const handleOnAdd = (id, x) => {
    updateQuantity(id, x)
  }
  const handleOnChange = (id,x) => {;
    updateQuantitySelect(id, x);
  }
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
      <motion.h1 
      initial={{scale: 0, x: '-100vw'}}
            animate={{scale: 1, x: 0}}
            transition={{duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring"}}
      >Carrito</motion.h1>
      <div className='cartItems'>
                {
                 cart.map(prod => {
                        return (       
                            <motion.div 
                            initial={{scale: 0, x: '-100vw'}}
                            animate={{scale: 1, x: 0}}
                            transition={{duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring"}}
                            
                            
                            className='productInCart' key={prod.id}>
                                <div className="imgName">
                                  <Link to={`/producto/${prod.id}`}><img className="" src={prod.img1}></img>  </Link> 
                                  <h4>{prod.nombre}</h4>
                                </div>
                                <div className="controls"> 
                                <QuantityControl className="select"  prod={prod} updateQuantity={handleOnChange} />
                                  <div className="quantityControl">
                                    <button onClick={() => updateQuantity(prod.id, -1)}>-</button>
                                    <p>{prod.quantity}</p>
                                    <button onClick={() => updateQuantity(prod.id, +1)}>+</button>
                                </div>
                                  <p className='price'>{formatearMoneda(prod.precio * prod.quantity)}</p>
                                  <DeleteOutlineIcon className='delete' onClick={() => removeItem(prod.id)}></DeleteOutlineIcon>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
      <motion.div 
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
            transition={{duration: 1.5, ease: "easeInOut", delay: 1, type: "spring"}}
      className="btnTotal">
        <h5>Total de la compra: {formatearMoneda(total)}</h5>
        <Button action={() => clearCart()} label="Vaciar"/>    
        <Button action={() => buyCart()} label="Comprar"/>    
      </motion.div>
            

    </div>
  )
}

export default Cart


