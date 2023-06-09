import SliderHome from "../componentes/SliderHome/SliderHome"
import Container from "../layout/Container"
import img from '../assets/capaIntro.png'
import imgbox from '../assets/imgbox.jpg'

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
            <section className="produtos">
                <Container customClass="column">
                    <h2>Principais produtos</h2>
                    <div className="prod">
                        <figure>
                            <img src={imgbox} alt=""/>
                            <figcaption>
                                <h3>Box</h3>
                                <p>Temos várias opções de Bo  modelo Embutido no Gesso é uma ótima opção.</p>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>
        </main>
        
        
    )
}