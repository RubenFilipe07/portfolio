import React, { Fragment } from 'react'
import Intro from './components/Intro/Intro';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Diferenciais from './components/Diferenciais/Diferenciais';
import MenuSuspenso from './components/MenuSuspenso/MenuSuspenso';
import Habilidades from './components/Habilidades/Habilidades';
import Contatos from './components/Contatos/Contatos';
import Projetos from './components/Projetos/Projetos';
import './app.css';



function App() {
  return (
    <Fragment>
        <MenuSuspenso />
        <Intro />
        <Experiencia />
        <Habilidades />
        {/* <Projetos /> */}
        <Diferenciais />
        <Contatos />
        <Footer />
    </Fragment>
  );
}

export default App;
