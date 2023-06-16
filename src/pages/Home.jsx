import SliderHome from "../componentes/SliderHome/SliderHome"
import Container from "../layout/Container"
import TitleCenter from '../componentes/TitleCenter/TitleCenter'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa";
import '../componentes/Card/style.css'
import imgIntro from '../assets/capaIntro.png'
import imgbox from '../assets/imgbox.jpg'
import produto2 from '../assets/produto2.jpg'
import produto3 from '../assets/produto3.jpg'
import produto4 from '../assets/produto4.jpg'
import Card from "../componentes/Card/Card"
import Slider from "../componentes/SliderDepo/Slider"

export default function Home(){
   
    const [ img, setImg] = useState([])
    const [file, setFile] = useState(null)

    useEffect(() => {

        fetch("/data/thumbs.json")
        .then((r) => r.json())
        .then((data) =>{
            setImg(data)
            
        })


    }, [])

    return (
        <main>        
            <div className="banner">
                <div className="blocoTexto">
                    <h1>Vidraçaria Oliveira</h1>
                    <p>Realizando projetos desde 1971</p>
                    <p>Transforme sua visão em realidade com a nossa vidraçaria especializada, onde a excelência e a qualidade se unem para criar espaços elegantes e modernos, proporcionando beleza, segurança e sofisticação para o seu lar ou negócio.</p>
                </div>  
            </div>
            
            <p>Pagina Home</p>
            <Container>
                <div className="intro">                    
                    <p>A EMPÓRIO GLASS está localizada em São Paulo e foi fundada em 2010, atuando no mercado com profissionalismo no segmento de vidros em geral, seja para a construção civil e decoração. <br/><br/>
                    A Empresa trabalha com os maiores fabricantes do mercado e está preparada para atender seu projeto com alto nível de satisfação, com variedades de produtos, qualidade e confiança. Seu alvo é sempre superar a expectativa dos clientes, proporcionando a sua obra: sofisticação, estilo, segurança e com melhor Custo x Benefício.</p>
                </div>
                <div className="img-intro">
                    <img src={imgIntro} alt="imagem de espelho"/>
                </div>
            </Container>
            <section className="s-base">
                <Container customClass="column">
                    <TitleCenter titulo="Principais produtos"/>
                    <div className="produtos">
                        <figure>
                            <img src={imgbox} alt="imagem de box"/>
                            <figcaption>
                                <h3>Box</h3>
                                <p>Temos várias opções de Box modelo Embutido no Gesso é uma ótima.</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={produto2} alt="imagem de telhado de vidro"/>
                            <figcaption>
                                <h3>Telhado</h3>
                                <p>Temos opções de telhadosn vidro temperado, transparente...</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={produto3} alt=""/>
                            <figcaption>
                                <h3>Mesa</h3>
                                <p>Temos várias opções de mesa, vidro transparente dentre outros.</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={produto4} alt=""/>
                            <figcaption>
                                <h3>Janela</h3>
                                <p>Temos várias opções de janelas entre contato.</p>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            <Container customClass="padd">
                <div className="bloco">
                    <Card 
                    icone="/img/icone/missao.png"
                    titulo="Missao"
                    descricao="Fornecer produtos e serviços de vidraçaria de alta qualidade, atendendo às necessidades e expectativas de nossos clientes."
                    />
                    <Card 
                    icone="/img/icone/visao.png"
                    titulo="visão"
                    descricao="Ser reconhecida como a principal vidraçaria da região, destacando-se pela excelência em qualidade, inovação e atendimento ao cliente. "
                    />
                    <Card 
                    icone="/img/icone/valores.png"
                    titulo="valores"
                    descricao="Comprometimento em fornecer vidros e serviços de alta qualidade, garantindo a satisfação dos clientes e a durabilidade dos produtos."
                    />
                   
                </div>
                <div className="img-valores">
                    <img src="/img/capa/img.png" alt=""/>
                </div>                
            </Container>

            <section className="s-base">
                <Container>
                <TitleCenter titulo="depoimetos"/>
                    <Slider/>
                </Container>
            </section>

            <Container customClass="column">
            <TitleCenter titulo="Veja alguns dos projetos já realizados" customClass="title-black"/>
                <div className="thumbs-gal">
                    {img.map((item)=> (
                        <div className={item.style} key={item.alt}>
                            <img src={item.image} alt={item.alt} onClick={()=> setFile(item)}/>
                        </div>
                    ))}
                </div>
                {file ? <div className="lightbox">
                <span onClick={()=> setFile(null)}>&times;</span>
                        <img src={file.image} alt=""/>
                    </div>:null }
                <Link to="/projetos-realizados" className="btn-lightbox"><FaAngleDown/></Link>
            </Container>
            
            
        </main>
        
        
    )
}