import React from 'react';
import './contacto.css';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { motion } from "framer-motion"


export const Contacto = () => {
    const sendMessage = () => {
        Swal.fire({
            title: 'Enviar mensaje',
            text: '¿Estás seguro de que deseas enviar mensaje?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar mensaje',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                let mensaje = `Hola soy ${name}, este es mi mail, ${email}:\n\n`;
                if (message) {
                    mensaje += `Mensaje: ${message}\n\n`;
                }

                const numeroWhatsApp = '543412524906';

                function esDispositivoMovil() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                let urlWhatsApp = '';

                if (esDispositivoMovil()) {
                    urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
                } else {
                    urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
                }

                window.open(urlWhatsApp, '_blank');
            } 
        });
    };

    return (
        <div className='contactoContainer'>
            <motion.h1 
            initial={{scale: 0, x: '-100vw'}}
            animate={{scale: 1, x: 0}}
            transition={{duration: 1, ease: "easeInOut", delay: 0.5, type: "spring"}}>
            Contacto</motion.h1>
            <div className='row'>
                <div className='col-md-12'>
                    <motion.form className='contactForm'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3, ease: "easeInOut", delay: 0.7, type: "spring"}}>
                        <div className='form-group'>
                            <label htmlFor='name'>Nombre:</label>
                            <input type='text' className='form-control' id='name' name='name' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' className='form-control' id='email' name='email' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Mensaje (Opcional):</label>
                            <textarea id='message' name='message' className='form-control' rows='6'></textarea>
                        </div>
                        <Button label='Enviar' name='contact' action={sendMessage} />
                    </motion.form>
                </div>
            </div>
        </div>
    );
};
