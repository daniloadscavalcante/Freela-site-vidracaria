import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Form() {
  const form = useRef();
  const [fullNameError, setFullNameError] = useState(false);
  const [telCelError, setTelCelError] = useState(false);
  const [assuntoError, setAssuntoError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sucess, setSucess] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    
    const fullName = form.current.from_name.value;        
    const telCel = form.current.tel.value;
    const assunto = form.current.assunto.value;
    const message = form.current.msg.value;
    
    if (fullName === '') {
      alert('Por favor, preencha o campo nome completo.');   
      setFullNameError(true)  
      return;
    }
  
    if (telCel === '') {
      alert('Por favor, preencha o campo celular.');
      setTelCelError(true) 
      return;
    }
  
    if (assunto === '') {
      alert('Por favor, preencha o campo assunto.');
      setAssuntoError(true) 
      return;
    }
  
    if (message === '') {
      alert('Por favor, digite uma mensagem.');
      setMessageError(true) 
      return;
    }
   
    emailjs.sendForm('service_cmimu8t', 'template_mgpa2xf', form.current, 'I6khdgrvIHKgb2scM')
      .then((result) => {
          console.log(result.text);
          console.log("deu certo")
          form.current.reset();
          setSucess(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className='formulario' ref={form} onSubmit={sendEmail}>
      {sucess && <div className='sucess'>Email enviado!</div>}
      <input type='text' 
      placeholder='Nome Completo*:' 
      name='from_name' 
      className={fullNameError ? 'error-msg' : ''} required/>

      <input type='email' 
      placeholder='Email:' 
      name='email' 
      required/>

      <input type='tel' 
      placeholder='Tel/Cel: (xx) xxxxxx' 
      name='tel' 
      className={telCelError ? 'error-msg' : ''}required/>

      <input type='text' 
      placeholder='Assunto*' 
      name='assunto' 
      className={assuntoError ? 'error-msg' : ''}required/>

      <textarea placeholder='Digite sua Mensagem*' 
      name='msg' 
      className={messageError ? 'error-msg' : ''}required></textarea>      
      <button type='submit' className='btnForm'>Enviar</button>
    </form>
  );
}