import './Banner.css'
export default function Banner({titulo, bg}){
    return(
        <section className={`bannerBase ${bg}`}>
            <h2>{titulo}</h2>
        </section>
    )
}