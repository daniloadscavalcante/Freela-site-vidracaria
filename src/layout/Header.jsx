import logo from '../assets/Logo.png';
import Button from '../componentes/Button/Button';
import Menu from './Menu'

export default function Header(){
    return(
        <header>
        <div className="navbar">
            <img src={logo} alt="Vidraçaria oliveira"/>
            <Menu button={<Button/>}/>
        </div>
    </header>
    )
}