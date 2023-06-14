import { BsArrowRight } from "react-icons/bs"
import './Button.css'
import { Link } from "react-router-dom"
export default function Button(){
    return(
        <Link to="https://google.com" target='_blank'>
            <button className="btn btnMenu">Orçamento <BsArrowRight className='arrowButton' /></button>
        </Link>

    )
}