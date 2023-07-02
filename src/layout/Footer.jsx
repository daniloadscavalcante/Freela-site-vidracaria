import { Link } from 'react-router-dom';
import logo from '../assets/LogoFooter.png';
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css'
import Menu from './Menu';
import Maps from '../componentes/Maps/Maps';


export default function Footer(){
    return(
        <footer>
            <div className='center-footer'>
                <div className='logo-rodape'>
                    <img src={logo} alt="Vidraçaria oliveira" />
                </div>
                <div className='menuFooter'>
                   <Menu customClass="menu-rodape"                   
                   showtoggle={false}
                   />
                </div>
                
                <div className='contato'>
                    <span className='titulo-rodape'>Contato</span>
                    <Link to="tel:+551122034809"><FaPhoneAlt/>(11) 92138-9873</Link>
                    <Link to="http://wa.me/5511981488211" target="_blank"rel="noopener noreferrer"><FaWhatsapp/>(11) 92138-9873</Link>
                    <Link to="mailto:oliveira.vidracaria1971@gmail.com" className='email'><FaRegEnvelope/>oliveira.vidracaria1971@gmail.com</Link>
                    <div className='rede-sociais'>
                        <span className='titulo-rodape'>Nós siga nas redes</span>
                        <Link to="#" className='fa'><FaFacebook/></Link>
                        <Link to="https://www.instagram.com/vidracaria.oliveira1971/" target="_blank" rel="noopener noreferrer"className='fa'><FaInstagram/></Link>
                    </div>
                </div>
                <div className='endereco'>
                    <span className='titulo-rodape'>Localização</span>
                    <div>
                        <span><FaMapMarkerAlt/></span>
                        <address>                    
                        R. Manuel Gaya, 1429 - Jd Tremembe, São Paulo - SP, 02313-001
                        </address>
                    </div>
                    
                    <Maps />
                </div>
            </div>
            <div className='copy'>
                <p>© 2023 - vidraçaria oliveira - Todos direitos reservado <br/>Desenvolvidor por - Danilo Santos</p>
            </div>
        </footer>
    )
}
