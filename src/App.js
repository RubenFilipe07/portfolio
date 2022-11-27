import React from 'react'
import Intro from './components/Intro/Intro';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Diferenciais from './components/Diferenciais/Diferenciais';
import MenuSuspenso from './components/MenuSuspenso/MenuSuspenso';
import Habilidades from './components/Habilidades/Habilidades';
import Contatos from './components/Contatos/Contatos';
import './app.css';


function App() {
  return (
    <div className="App">
     <MenuSuspenso/>
     <Intro/>
     <Experiencia/>
     <Habilidades/>
     <Diferenciais/>
     <Contatos/>
     <Footer/>
    </div>
  );
}

export default App;
