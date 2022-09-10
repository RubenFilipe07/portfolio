import React from 'react'

import './MenuSuspenso.css'

import linkedin from '../../assets/menuSuspenso/linkedin.webp'
import github from '../../assets/menuSuspenso/github.webp'
import lattes from '../../assets/menuSuspenso/lattes.webp'
import cv from '../../assets/menuSuspenso/cv.webp'

function MenuSuspenso() {
  return (
    <div className="menuSuspenso">
        <div className='menuSuspenso-links'>
            <a href='https://www.linkedin.com/in/rubenfilipe07/'>
                <img src={linkedin} alt="linkedin" className='linkedin' width={30} height={30} />
            </a>

            <a href='https://github.com/RubenFilipe07'>
                <img src={github} alt="github" className='github' width={30} height={30} />
            </a>

            <a href='https://lattes.cnpq.br/6391662114404047'>
                <img src={lattes} alt="lattes" className='lattes' width={30} height={30} />
            </a>

            <a href='https://ruben-filipe.web.app/arquivos/Curr%C3%ADculo%20-%20R%C3%BAben%20Filipe.pdf'>
                <img src={cv} alt="cv" className='cv' width={30} height={30} />
            </a>

        </div>
    </div>
  );
}

export default MenuSuspenso;
