import './Menu.css'
import LinkMenu from './menu/LinkMenu'

export default function Menu(props){
    return(
        <nav>
            <div className='toggle'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
            <ul className={`${"menu"} ${props.customClass}`}>
                <LinkMenu target="/" text="home"/>
                <LinkMenu target="/sobre-nos" text="sobre nós"/>
                <LinkMenu target="/servicos" text="serviços"/>
                <LinkMenu target="/projetos-realizados" text="projeto realizados"/>
                <LinkMenu target="/contato" text="contato"/>
                <li>{props.button}</li>                
            </ul>
        </nav>
    )
}