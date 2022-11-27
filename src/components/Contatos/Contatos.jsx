import React from 'react'
import './Contatos.css'
import Telegram from '../../assets/contatos/telegram.webp'
import Whatsapp from '../../assets/contatos/whatsapp.webp'
import Linkedin from '../../assets/contatos/linkedin.webp'
import Github from '../../assets/contatos/github.webp'
import Gmail from '../../assets/contatos/gmail.webp'

function Contatos() {
  return (
    <div className="contatos">
      <div className='contatos-section'>
        <div className='contatos-esquerdo'>
          <h1 className="titulo-contatos">Contatos</h1>
          <p className='contatos-item'>Telefone: (84) 98159-3183</p>
          <p className='contatos-item'>Gmail: rubenfilipe.net@gmail.com</p>
          <h1 className='titulo-redes-sociais'>Redes Sociais</h1>

          <a href='https://www.linkedin.com/in/rubenfilipe07/' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Linkedin} alt='linkedin' /></a>
          <a href='https://t.me/ruben_filipe07' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Telegram} alt='telegram' /></a>
          <a href='https://wa.me/5584981593183' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Whatsapp} alt='whatsapp' /></a>
          <a href='https://github.com/rubenfilipe07' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Github} alt='github' /></a>
        </div>

        <div className='contatos-direito'>
          <h1 className='titulo-fale-comigo'>Fale Comigo</h1>
          <div className='card-email'>
            <img src={Gmail} alt='gmail' width={100} height={100}></img>
            <a href='mailto:rubenfilipe.net@gmail.com'>
              <div className='botao-gmail'>Enviar Email</div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contatos;
