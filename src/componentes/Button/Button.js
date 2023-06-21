import { BsArrowRight } from "react-icons/bs"
import './Button.css'
import { Link } from "react-router-dom"
export default function Button({texto, url, customClass, svg, type}){
    return(        
        <button type={type} className={`btn btnMenu ${customClass}`}><Link to={url} target='_blank' rel="noopener noreferrer">{texto}</Link> {svg && <BsArrowRight className='arrowButton' />}</button>       

    )
}