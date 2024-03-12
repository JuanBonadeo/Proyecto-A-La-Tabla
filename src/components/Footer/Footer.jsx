import '../Footer/footer.css'
import Logo from '../Logo/Logo.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <footer>
            <div className='footer1'>
                <Logo/>
                <div className='footerLinks'>
                    <Link to="/contacto"className="dark" label="Atencion al Cliente">Atencion al Cliente</Link>
                    <Link  className="dark"label="Preguntas Frecuentes">Preguntas Frecuentes</Link>
                    <Link className="dark" label="Terminos & Condiciones">Terminos & Condiciones</Link>
                    <Link to="/quienesSomos" className="dark" label="Quienes Somos">Quienes Somos</Link>
                </div>
            </div>
            <div className='footer2'>
                <a href='https://www.instagram.com/_alatabla_/'><InstagramIcon/></a>
                <a><FacebookIcon/></a>
                <a href='https://github.com/JuanBonadeo'><GitHubIcon/></a>
                <a><LinkedInIcon/></a>
            </div>
            <h5>©ALATABLA Copyright  todos los derechos reservados</h5>
            <h5>Develop by:   <a>JuanBonadeo</a></h5>

            
        </footer>
    )
}
export default Footer