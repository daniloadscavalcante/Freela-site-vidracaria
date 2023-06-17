import Banner from "../layout/BaseBanner/Banner";
import Container from '../layout/Container'
import { useState, useEffect } from "react";
export default function Projetos(){

    const [img, setImg] = useState([])
    const [file, setFile] = useState(null)

    useEffect(() => {


        fetch('/data/imgs.json')
        .then((r) => r.json())
        .then((data) => {
            setImg(data.galeria)
            
        })           

    }, [])

    return (
        <main>            
            <Banner 
            titulo="Projetos realizados"
            bg="bg"
            />
            <p>Pagina Projetos realizados</p>
            <section className="projetosRealizados">
                <h2>Conheça nossos projetos já realizados</h2>
                <p>Projetos com qualidade e deginers inovadores</p>
            </section>
            <Container>
                <div className="thumbs-gal">
                   {img.map((item)=> (
                    <div className="img-item img-itemCustom" key={item.alt}>
                        <img src={item.url} alt={item.alt} onClick={()=> setFile(item)}/>
                    </div>
                    
                   ))}
                   {file ? <div className="lightbox">
                    <span onClick={()=> setFile(null)}>&times;</span>
                    <img src={file.url} alt={file.alt}/>
                    </div>:null}
                </div>
            </Container>
        </main>
    )
}