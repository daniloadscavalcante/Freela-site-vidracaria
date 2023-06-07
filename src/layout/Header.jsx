import logo from '../assets/Logo.png';
import Menu from './Menu'

export default function Header(){
    return(
        <header>
        <div className="navbar">
            <img src={logo} alt="Vidraçaria oliveira"/>
            <Menu />
        </div>
    </header>
    )
}