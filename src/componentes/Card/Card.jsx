import './style.css'
export default function Card({icone, titulo, descricao, alt}){
    return (
        <section className='card'>
            <div className='icone'>
                <img src={icone} alt={alt}/>            
            </div>
            <div className='descritivo'>
                <span className='titleCard'>{titulo}</span>
                <p>{descricao}</p>
            </div>
        </section>
    )
}