import './style.css'
export default function Card({icone, titulo, descricao, alt, customClass}){
    return (
        <section className={`card ${customClass}`}>
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