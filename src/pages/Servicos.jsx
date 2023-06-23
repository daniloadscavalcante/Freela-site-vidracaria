import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from '../layout/BaseBanner/Banner'
import img from '../assets/thumbServico.webp'
import img2 from '../assets/thumbServico2.webp'
import img3 from '../assets/thumbServico3.webp'
import img4 from '../assets/thumbServico4.webp'
import './servico.css'
import Button from "../componentes/Button/Button";

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
            <section className='prevServico'>                
                <p>Conheça alguns dos nossos serviços</p>
                <div className='prevThumb'>
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

                <div className='servicos'>
                    <ul className='listServico'>
                        <li>Box</li>
                        <li>Vidro Temperado</li>
                        <li>Portas e Janelas</li>
                        <li>Tampas de Mesa</li>
                        <li>Jatos de Areia</li>
                        <li>Cobertura de Vidros</li>
                        <li>Espelhos</li>
                        <li>Guarda Corpo</li>
                        
                        <Button texto="Saiba mais" url="http://wa.me/5511981488211" customClass="btnCustom" svg={true}/>
                    </ul>
                    <div className='sliderServicos'>
                        
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