import SliderHome from "../componentes/SliderHome/SliderHome"
import Container from "../layout/Container"
import TitleCenter from '../componentes/TitleCenter/TitleCenter'
import img from '../assets/capaIntro.png'
import imgbox from '../assets/imgbox.jpg'
import produto2 from '../assets/produto2.jpg'
import produto3 from '../assets/produto3.jpg'
import produto4 from '../assets/produto4.jpg'

export default function Home(){
   
    return (
        <main>            
            <SliderHome/>
            <p>Pagina Home</p>
            <Container>
                <div className="intro">                    
                    <p>A EMPÓRIO GLASS está localizada em São Paulo e foi fundada em 2010, atuando no mercado com profissionalismo no segmento de vidros em geral, seja para a construção civil e decoração. <br/><br/>
                    A Empresa trabalha com os maiores fabricantes do mercado e está preparada para atender seu projeto com alto nível de satisfação, com variedades de produtos, qualidade e confiança. Seu alvo é sempre superar a expectativa dos clientes, proporcionando a sua obra: sofisticação, estilo, segurança e com melhor Custo x Benefício.</p>
                </div>
                <div>
                    <img src={img} alt=""/>
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
        </main>
        
        
    )
}