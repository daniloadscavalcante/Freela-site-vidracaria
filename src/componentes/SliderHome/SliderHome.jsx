import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'


export default function SliderHome(){
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: false,
        autoplaySpeed: 3500,

      };
    return(
        <Slider {...settings}>
            <div className="banner">
                <div className="bannerMain">
                    <h1>Vidraçaria Oliveira</h1>
                    <span>Realizando sonhos desde 1971</span>
                </div>  
            </div>
            <div className="banner2"></div>
            <div className="banner3"></div>
            <div className="banner4"></div>
        </Slider>
    )
}