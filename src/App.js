import React from 'react'
import Intro from './components/Intro/Intro';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Diferenciais from './components/Diferenciais/Diferenciais';
import MenuSuspenso from './components/MenuSuspenso/MenuSuspenso';
import Habilidades from './components/Habilidades/Habilidades';
import Contatos from './components/Contatos/Contatos';
import Projetos from './components/Projetos/Projetos';
import './app.css';


import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LcizIokAAAAAAYvt79OAwuONfhE3b-HE-S9vb5e'
    container={{ 
      element: "rc-anchor",
      parameters: {
        badge: 'bottomright',
        theme: 'dark', 
      }
    }}>
        <MenuSuspenso />
        <Intro />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <Diferenciais />
        <Contatos />
        <Footer />
    </GoogleReCaptchaProvider>
  );
}

export default App;
