import { React, Fragment } from 'react'
import './Diferenciais.css'

function Diferenciais() {
  return (
    <Fragment>
      <div className="diferenciais">
        <h1 className='titulo-diferenciais'>Diferenciais</h1>
        
        <div className='card-diferenciais primeiro'> 
            <div className='numeracao-diferenciais'>
              <h1>1</h1>
            </div>
            <div className='conteudo-diferenciais'>
              <p><span className='titulo-conteudo-diferenciais'>Foco em qualidade</span>
              Uso ferramentas como google lighthouse e chrome devtools, para testar e aperfeiçoar o site, garantindo que o mesmo tenha um bom desempenho, acessibilidade, responsividade/compatibilidade e SEO.</p>
            </div>
        </div>

        <div className='card-diferenciais segundo'> 
            <div className='numeracao-diferenciais'>
              <h1>2</h1>
            </div>
            <div className='conteudo-diferenciais'>
              <p><span className='titulo-conteudo-diferenciais'>Boas práticas</span>
              Utilizo técnicas que garantem qualidade do código e organização do projeto, resultando em uma compreensão melhor por outros desenvolvedores e uma maior facilidade na manutenção.</p>
            </div>
        </div>

        <div className='card-diferenciais terceiro'> 
            <div className='numeracao-diferenciais'>
              <h1>3</h1>
            </div>
            <div className='conteudo-diferenciais'>
              <p><span className='titulo-conteudo-diferenciais'>Aprendizado por imersão</span>
              Busquei atrelar estudo e prática, sempre criando projetos para atestar meu conhecimento e ir aprendendo coisas novas com o desafio.</p>
            </div>
        </div>


      </div>
    </Fragment>
  );
}

export default Diferenciais;
