import {NavLink} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function Menu(){
    return(
        <nav>
            <ul className="menu">
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/sobre-nos">sobre nós</NavLink></li>
                <li><NavLink to="/servicos">serviços</NavLink></li>
                <li><NavLink to="/projetos-realizados">projeto realizados</NavLink></li>
                <li><NavLink to="/contato">contato</NavLink></li>
                <li><NavLink to="https://google.com" target='_blank'>
                    <button className="btn">Orçamento <BsArrowRight className='arrowButton' /></button>
                </NavLink></li>
                
            </ul>
        </nav>
    )
}