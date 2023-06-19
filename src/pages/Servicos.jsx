import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from '../layout/BaseBanner/Banner'
import img from '../assets/thumbServico.jpg'
import img2 from '../assets/thumbServico2.jpg'
import img3 from '../assets/thumbServico3.jpg'
import img4 from '../assets/thumbServico4.jpg'
import './servico.css'

export default function Servicos(){

        const settings = {
          dots: false,
          fade: true,
          infinite: true,
          autoplay: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1
        };


    return (
        <main>
            <Banner titulo="serviços" bg="bg"/>
            
            <div className='backImg'>
            <section className='teste'>                
                <p>Conheça alguns dos nossos serviços</p>
                <div className='thumbsServicos'>
                    <div className='thumb-item'>
                        <img src={img4} alt=""/>
                    </div>
                    <div className='thumb-item'>
                        <img src={img3} alt=""/>
                    </div>
                    <div className='thumb-item'>
                        <img src={img} alt=""/>
                    </div>
                    <div className='thumb-item'>
                        <img src={img2} alt=""/>
                    </div>
                </div>

                <div className='teste2'>
                    <ul className='listServico'>
                        <li>Box</li>
                        <li>Vidro Temperado</li>
                        <li>Portas e Janelas</li>
                        <li>Tampas de Mesa</li>
                        <li>Jatos de Areia</li>
                        <li>Cobertura de Vidros</li>
                        <li>Espelhos</li>
                        <li>Guarda Corpo</li>
                        <button className='btnServico'>Saiba mais</button>
                    </ul>
                    <div className='s-banner'>
                        
                        <div>
                            <h2>Espelhos com Design<br/> unicos</h2>
                            <Slider {...settings}>
                                <div>
                                    <img src={img} alt=""/>
                                </div>
                                <div>
                                    <img src={img2} alt=""/>
                                </div>  
                                <div>
                                    <img src={img3} alt=""/>
                                </div>
                                <div>
                                    <img src={img4} alt=""/>
                                </div>      
                            
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </main>
    )
}