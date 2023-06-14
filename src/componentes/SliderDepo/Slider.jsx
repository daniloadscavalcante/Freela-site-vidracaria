import {BsFillStarFill, BsArrowUpRightSquare} from "react-icons/bs"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import './styles.css'

export default function Slider(){

    const [bloco, setBloco] = useState([])


    useEffect(() => {
    
        fetch('/depoimentos/depoimentos.json')
        .then((r)=> r.json())
        .then(data => {
            setBloco(data)            
        })

    }, [])

    return (
    
        <Glider
            className="glider-container"
            draggable
            hasDots
            slidesToShow={3.5}
            slidesToScroll={1}
            scrollToSlide={1}
            responsive={[
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: "auto",
                    itemWidth: 350,
                    duration: 0.25,
                        
                    },
                },
                {
                    breakpoint: 200,
                    settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: "auto",
                    itemWidth: 250,
                    duration: 0.25,
                        
                    },
                }
            ]}
            >
            {bloco.map((item)=>(
                <div className='blocoDepo' key={item.nome}>                
                    <span className='blocoDepoUser'>{item.nome}</span>                     
                    <div className='blocoDepoStar'>                    
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                    </div>
                    <p className='depoimento'>{item.depo}</p>
                    <Link to={item.url} target="_blank"><span className="blocoDepolinkExt">Ler mais<BsArrowUpRightSquare/></span></Link> 
                </div>
            ))}
            
        </Glider>
        
        

    )
}