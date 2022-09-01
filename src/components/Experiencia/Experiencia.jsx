import {React, Fragment} from 'react'
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './Experiencia.css'

import curriculo from '../../assets/curriculo.webp';
import reactjs from '../../assets/tecnologias/react.webp';
import javascript from '../../assets/tecnologias/javascript.webp';
import spring from '../../assets/tecnologias/spring.webp';
import figma from '../../assets/tecnologias/figma.webp';

function Experiencia() {
  return (
    <Fragment>
    <div className="experiencia">
        <div className='esquerdo'>
        <h1  className='titulo-experiencia'>Formação</h1>
          <hr className='barra'/>
        <span className='experiencia-conteudo'>
        <Timeline endless className='exp-acad'>
        <Timeline.Item>
            <p className='instituicao'>IFRN</p>
            <p className='curso'>Curso técnico em informática</p>
            <p className='tipo-curso'>Integrado ao Ensino médio</p>
            <p  className='data'>Mar. de 2017 - Mar. de 2021</p>
        </Timeline.Item>
        <Timeline.Item>
            <p className='instituicao'>UFRN</p>
            <p className='curso'>Técnologia da informação</p>
            <p className='tipo-curso'>Bacharelado</p>
            <p  className='data'>Jun. de 2021 - Presente</p>
        </Timeline.Item>
        </Timeline>
        </span>
        </div>

        <div className='centro'>
        <h1  className='titulo-experiencia'>Experiência</h1>
          <hr className='barra'/>
        <span className='experiencia-conteudo'>
          <Timeline endless className='exp-trab'>
          <Timeline.Item dot={<span style={{visibility: 'hidden' }}/>}></Timeline.Item>
          <Timeline.Item>
              <p className='instituicao'>PROAD/UFRN</p>
              <p className='cargo'>Desenvolvedor Fullstack⠀⠀⠀</p>
              <p className='data'>Out. de 2021 - Presente</p>
              <ul className='tecnologias-experiencia'>
                <li>React.js</li>
                <li>Strapi CMS</li>
                <li>Figma</li>
                <li>Git/Github</li>
              </ul>
          </Timeline.Item>
          </Timeline>
        </span>
        </div>


        <div className='direito'>
        <h1 className='titulo-experiencia'>Currículo</h1>
          <hr className='barra'/>
          <span className='experiencia-conteudo curriculo'>
            <a href='https://rubenfilipe07.me/arquivos/Curr%C3%ADculo%20-%20R%C3%BAben%20Filipe.pdf'>
            <img src={curriculo} alt="curriculo" className='curriculo' width={250} height={171}/>
            <button className='donwload-curriculo'>Donwload</button>
            </a>
          </span>
        </div>
       
    </div>

    <div className='tecnologias'>
      <img src={javascript} alt="javascript" />
      <img src={reactjs} alt="react.js" />
      <img src={spring} alt="spring" />
      <img src={figma} alt="figma" />
    </div>
    </Fragment>
  );
}

export default Experiencia;
