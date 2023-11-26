import React from 'react'
import './Intro.css'

import perfil from '../../assets/perfil.webp'

function intro() {
  return (
    <div className="intro">
      <div className='gridDireito'>
        <img rel="preload"  className="foto-perfil" src={perfil} alt='perfil' as="image" width={250} height={250}></img>
      </div>
      <div className='gridEsquerdo'>
        <h1 className="nome">Olá, sou Rúben Filipe</h1>
        <h1 className="cargo">Desenvolvedor Fullstack</h1>
        <p className="texto-intro">Técnico em informática formado pelo IFRN e bacharelando em Tecnologia da Informação no IMD/UFRN (6º período). Tenho mais de 2 anos de experiência como desenvolvedor full stack na Pró-Reitoria de Administração da UFRN. Atualmente, desenvolvedor full stack na Quark Tecnologia.</p>
      </div>
    </div>
  );
}

export default intro;
