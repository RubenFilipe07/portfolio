import React from 'react'
import './Intro.css'

import perfil from '../../assets/perfil.webp'

function intro() {
  return (
    <div className="intro">
      <div className='gridDireito'>
        <img rel="prefetch"  className="foto-perfil" src={perfil} alt='perfil' width={250} height={250}></img>
      </div>
      <div className='gridEsquerdo'>
        <h1 className="nome">Olá, sou Rúben Filipe</h1>
        <h1 className="cargo">Desenvolvedor Fullstack</h1>
        <p className="texto-intro">Tenho experiência em programação desde 2017, quando entrei no curso técnico em informática pelo IFRN, logo após me formar, entrei na graduação em TI pela UFRN e consegui minha primeira experiência em uma vaga de programação: desenvolvedor Full Stack na PROAD, a pró reitoria de administração da UFRN, na qual estou contribuindo com o desenvolvimento de seu novo site.
        </p>
      </div>
    </div>
  );
}

export default intro;
