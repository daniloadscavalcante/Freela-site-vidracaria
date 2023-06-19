import { BsArrowRight } from "react-icons/bs"
import './Button.css'
import { Link } from "react-router-dom"
export default function Button({texto, url, customClass, svg}){
    return(        
        <button className={`btn btnMenu ${customClass}`}><Link to={url} target='_blank'>{texto}</Link> {svg && <BsArrowRight className='arrowButton' />}</button>       

    )
}