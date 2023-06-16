import logo from '../assets/Logo.png';
import Button from '../componentes/Button/Button';
import Toggle from '../componentes/Toggle/Toggle';
import Menu from './Menu'
import { useState } from 'react';

export default function Header(){

    
    return(
        <header>
        <div className="navbar">
            <img src={logo} alt="Vidraçaria oliveira"/>
            <Menu 
            button={<Button/>}
            showtoggle={true}         
            />
            
        </div>
    </header>
    )
}