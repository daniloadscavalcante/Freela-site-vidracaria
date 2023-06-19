
import Banner from '../layout/BaseBanner/Banner'
export default function Contato(){
    return (
        <main>
            <Banner titulo="Contato"
            bg="bg"/>
            
            <section className="s_titulo">
                <h2>FORMULARIO DE CONTATO</h2>
                <p>Nossa equipe está pronta para lhe oferecer um <br/>atendimento personalizado</p>
            </section>

            <section className='s_contato'>
                
                <div className='s_texto'>
                    <h2>Tem alguma duvida ou quer um orçamento?</h2>
                    <p>Nossa equipe de profissionais altamente qualificados está pronta para oferecer um atendimento excepcional, esclarecer todas as suas dúvidas e tornar o seu sonho realidade. Utilize o formulário para nos enviar sua mensagem ou entre em contato conosco através dos canais abaixo. Estamos ansiosos para ajudá-lo a alcançar seus objetivos!"</p>

                    <div className='canais'>
                        <div className='icones'>
                            <img src="/img/icone/mdi_clock-outline.png" alt="icone relogio"/>
                        </div>
                        <div className='horario'>
                            <span className='canais_titulo'>Horário de Atendimento</span>
                            <p>Segunda a Sexta: 08h às 18h Sábados das 08h às 12h</p>
                        </div>
                    </div>
                    <div className='canais'>
                        <div className='icones'>
                            <img src="/img/icone/atendente.png" alt="icone relogio"/>
                        </div>
                        <div className='atendimento'>
                            <span className='canais_titulo'>Atendimento</span>
                            <p>Telefone :(11) 92138-9873</p>
                            <p>Whatsapp -(11) 92138-9873</p>
                        </div>
                    </div>
                </div>

                <form action="" className='formulario'>
                    <input type="text" placeholder='Nome Completo*' required/>
                    <input type="email" placeholder='Email' />
                    <input type="tel" placeholder='Telefone' />
                    <input type="tel" placeholder='Celular*' required/>
                    <input type="text" placeholder='Assunto*' required/>
                    <textarea placeholder='Digite sua Mensagem* required'></textarea>
                    <button type='submit' className='btnEnviar'>Enviar</button>
                </form>
            </section>
        </main>
    )
}