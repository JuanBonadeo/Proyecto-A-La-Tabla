import '../Footer/footer.css'
import Logo from '../Logo/Logo.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return(
        <footer>
            <div className='footer1'>
                <Logo/>
                <div className='footerLinks'>
                    <a  className="dark" label="Atencion al Cliente">Atencion al Cliente</a>
                    <a  className="dark"label="Preguntas Frecuentes">Preguntas Frecuentes</a>
                    <a className="dark" label="Terminos & Condiciones">Terminos & Condiciones</a>
                    <a className="dark" label="Quienes Somos">Quienes Somos</a>
                </div>
            </div>
            <div className='footer2'>
                <InstagramIcon />
                <FacebookIcon/>
                <GitHubIcon/>
                <LinkedInIcon/>
            </div>
            <h5>©ALATABLA Copyright  todos los derechos reservados</h5>

            
        </footer>
    )
}
export default Footer