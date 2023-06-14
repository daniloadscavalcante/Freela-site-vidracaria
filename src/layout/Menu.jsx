import { useState } from 'react'
import './Menu.css'
import LinkMenu from './menu/LinkMenu'

export default function Menu(props){
    
    const [ativo, setAtivo] = useState(false)

   function handleToggle(){
    setAtivo(!ativo)    
   }
   function handlehideMenu(){
    setAtivo(false)
   }


    return(
        <nav>
            <div className={`toggle ${ativo ? 'menuAtivo' : ''}`} onClick={handleToggle}>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
            <ul className={`${"menu"} ${props.customClass} ${ativo ? 'menuAtivo' : ''}`} onClick={handlehideMenu} >
                <LinkMenu target="/" text="home"/>
                <LinkMenu target="/sobre-nos" text="sobre nós" />
                <LinkMenu target="/servicos" text="serviços" />
                <LinkMenu target="/projetos-realizados" text="projeto realizados"/>
                <LinkMenu target="/contato" text="contato"/>
                {props.button}               
            </ul>
        </nav>
        
    )
}