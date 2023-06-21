import logo from '../assets/Logo.png';
import Button from '../componentes/Button/Button';

import Menu from './Menu'


export default function Header(){

    
    return(
        <header>
        <div className="navbar">
            <img src={logo} alt="Vidraçaria oliveira"/>
            <Menu 
            button={<Button texto="Orçamento" url="http://wa.me/5511981488211" svg={true}/>}
            showtoggle={true}         
            />
            
        </div>
    </header>
    )
}