import Banner from "../layout/BaseBanner/Banner";
import Container from "../layout/Container"
import Card from '../componentes/Card/Card'
import img from '../assets/qualidade.webp'
export default function Sobre(){
    return (
        <main>            
            <Banner titulo="sobre nós" bg="bg"/>
            
            <Container >
                <div className="texto-sobre">
                    <h3>Sobre nós</h3>
                    <p>Desde 1971, a <strong>Vidraçaria Oliveira</strong> tem sido uma presença confiável e estabelecida no mercado de vidraçaria. Com mais de cinco décadas de atuação, a empresa construiu uma sólida reputação baseada em qualidade, excelência e compromisso com os clientes.</p>
                    <p>Com o passar dos anos, a Vidraçaria Oliveira expandiu suas operações, acompanhando as tendências do mercado e investindo em tecnologia e inovação. A empresa passou a oferecer uma ampla gama de serviços, incluindo instalação de janelas, portas, espelhos, divisórias de vidro e fechamentos de varandas, sempre mantendo os mais altos padrões de qualidade em cada projeto.</p>
                    <p>A chave para o sucesso contínuo da Vidraçaria Oliveira tem sido sua equipe dedicada e altamente capacitada, hoje, a Vidraçaria Oliveira é reconhecida como uma referência no setor.</p>
                    
                </div>

               <div className="bloco-valores">
                    <Card 
                    icone="/img/icone/missao.png"
                    alt="icone missao"
                    titulo="Missao"
                    descricao="Fornecer produtos e serviços de vidraçaria de alta qualidade, atendendo às necessidades e expectativas de nossos clientes."
                    customClass="cardB-none"
                    />
                    <Card 
                    icone="/img/icone/visao.png"
                    alt="icone visao"
                    titulo="visão"
                    descricao="Ser reconhecida como a principal vidraçaria da região, destacando-se pela excelência em qualidade, inovação e atendimento ao cliente. "
                    customClass="cardB-none"
                    />
                    <Card 
                    icone="/img/icone/valores.png"
                    alt="icone valores"
                    titulo="valores"
                    descricao="Comprometimento em fornecer vidros e serviços de alta qualidade, garantindo a satisfação dos clientes e a durabilidade dos produtos."
                    customClass="cardB-none"
                    />
                   
                </div>
            </Container>

            <section className="sobreProfissionais">
                <div className="profissionais">
                    <h2>Nossos  profissionais são todos qualificados<br /> com anos de experiencias.</h2>
                    <p>Os profissionais da Vidraçaria Oliveira são verdadeiros especialistas em seu ofício. Com habilidades técnicas e conhecimento aprofundado sobre o trabalho com vidro, eles são uma parte essencial do sucesso da empresa. Além do conhecimento técnico, os profissionais da Vidraçaria Oliveira têm um olhar artístico e uma compreensão única das possibilidades estéticas do vidro. Eles são capazes de transformar uma simples folha de vidro em uma peça de arte funcional, combinando beleza e funcionalidade em cada projeto.</p>
                </div>
            </section>
            <Container customClass="padd">
                <div className="qualidade">                    
                    <h2>Excelência, Qualidade e Honestidade</h2>
                    <p>Mais de 50 anos realizando sonhos.<br/>
                    Entre contato e venha realizar o seu com a vidraçaria oliveira</p>    
                </div>
                <div className="img-intro">
                    <img src={img} alt="imagem de espelho"/>
                </div>
            </Container>


        </main>
    )
}