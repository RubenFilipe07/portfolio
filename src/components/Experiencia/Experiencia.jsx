import {React, Fragment} from 'react'
import { Timeline } from 'rsuite';
import 'rsuite/styles/index.less';
import './Experiencia.css'

import curriculo from '../../assets/curriculo.webp';
import reactjs from '../../assets/tecnologias/react.webp';
import angular from '../../assets/tecnologias/angular.webp';
import spring from '../../assets/tecnologias/spring.webp';
import node from '../../assets/tecnologias/node.webp';


function Experiencia() {
  return (
    <Fragment>
    <div className="experiencia">
        <div className='experiencia-esquerdo'>
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
                <li>Node.js</li>
                <li>Strapi CMS</li>
                <li>MySql</li>
                <li>Figma</li>
              </ul>
          </Timeline.Item>
          <Timeline.Item>
              <p className='instituicao'>Quark Tecnologia</p>
              <p className='cargo'>Desenvolvedor Fullstack⠀⠀⠀</p>
              <p className='data'>Nov. de 2023 - Presente</p>
              <ul className='tecnologias-experiencia'>
                <li>Spring</li>
                <li>Angular.ts</li>
                <li>JSF</li>
                <li>PostgreSql</li>
              </ul>
          </Timeline.Item>
          </Timeline>
        </span>
        </div>


        <div className='experiencia-direito'>
        <h1 className='titulo-experiencia'>Currículo</h1>
          <hr className='barra'/>
          <span className='experiencia-conteudo curriculo'>
            <a href='https://ruben07.me/arquivos/Curr%C3%ADculo%20-%20R%C3%BAben%20Filipe.pdf'>
            <img src={curriculo} alt="curriculo" className='curriculo' width={250} height={171}/>
            <button className='donwload-curriculo'>Donwload</button>
            </a>
          </span>
        </div>
       
    </div>

    <div className='tecnologias'>
      <img src={angular} alt="angular" width={100} height={100}/>
      <img src={reactjs} alt="react.js" width={100} height={100}/>
      <img src={spring} alt="spring" width={100} height={100}/>
      <img src={node} alt="node.js" width={100} height={100}/>
    </div>
    </Fragment>
  );
}

export default Experiencia;
