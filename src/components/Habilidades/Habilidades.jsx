import React from 'react'
import './Habilidades.css'
import web from '../../assets/habilidades/web.webp'
import figma from '../../assets/habilidades/figma.webp'
import playstore from '../../assets/habilidades/playstore.webp'

function Habilidades() {
  return (
    <div className="habilidades">
      <h1 className='titulo-principal'>O que eu faço?</h1>
      <div className="habilidades-container">
       
        <div className="habilidades-item">
          <img className='habilidades-imagem' src={web} alt="Aplicações web" />
          <h1 className='habilidades-titulo'>Aplicações Web</h1>
          <span className='habilidades-subtitulo'>React.js | Spring | Strapi CMS</span>
          <p className='habilidades-descricao'>Desenvolvimento e manipulação de aplicações web visando a qualidade do projeto</p>
        </div>

        <div className="habilidades-item">
          <img className='habilidades-imagem' src={figma} alt="Prototipagem" />
          <h1 className='habilidades-titulo'>Prototipagem</h1>
          <span className='habilidades-subtitulo'>Figma</span>
          <p className='habilidades-descricao'>Desenvolvimento de protótipos em alta fidelidade de interface e experiência do usuário</p>
        </div>

        <div className="habilidades-item">
          <img className='habilidades-imagem' src={playstore} alt="Aplicativos" />
          <h1 className='habilidades-titulo'>Aplicativos</h1>
          <span className='habilidades-subtitulo'>React Native</span>
          <p className='habilidades-descricao'>Desenvolvimento de aplicativos para Android e IOS feitos com react native.</p>
        </div>

  
      </div>
    </div>
  );
}

export default Habilidades;
