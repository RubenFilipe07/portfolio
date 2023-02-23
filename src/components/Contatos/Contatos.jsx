import React, { useState } from 'react'
import './Contatos.css'
import Telegram from '../../assets/contatos/telegram.webp'
import Whatsapp from '../../assets/contatos/whatsapp.webp'
import Linkedin from '../../assets/contatos/linkedin.webp'
import Github from '../../assets/contatos/github.webp'
import Gmail from '../../assets/contatos/gmail.webp'
import axios from 'axios'
import { useToaster, Message, Form, Button, Schema } from 'rsuite';
import { isEmpty } from 'lodash'
import {
  GoogleReCaptcha,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3'

import CampoMensagem from '../Formulario/CampoMensagem'
import CampoTexto from '../Formulario/CampoTexto'


function Contatos() {
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({ "nome": "Este campo é obrigatório.", "email": "Este campo é obrigatório.", "mensagem": "Este campo é obrigatório." });
  const [showEmailAPI, setShowEmailAPI] = useState(false);
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [apiIsReady, setApiIsReady] = useState(false);
  const toaster = useToaster();


  const verifyCallback = () => {
    axios.get(process.env.REACT_APP_API_URL+"/projetos", {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY
      }
    })
      .then(response => setApiIsReady(true))
      .catch(error => setApiIsReady(false));
  }

  const model = Schema.Model({
    nome: Schema.Types.StringType().isRequired('Este campo é obrigatório.').rangeLength(3, 50, 'O nome deve ter entre 3 e 50 caracteres.'),
    email: Schema.Types.StringType().isEmail('Digite um email válido.').isRequired('Este campo é obrigatório.'),
    mensagem: Schema.Types.StringType().isRequired('Este campo é obrigatório.').minLength(30, 'A mensagem deve ter no mínimo 30 caracteres.'),
  });


  const handleSubmit = () => {
    if (isEmpty(formError)) {
      axios.post(process.env.REACT_APP_API_URL+"/email", {
        nome: formValues.nome,
        email: formValues.email,
        mensagem: formValues.mensagem,
      }, {
        headers: {
          'api-key': process.env.REACT_APP_API_KEY
        }
      })
        .then(response => {
          toaster.push(emailSuccess, { duration: 5000 });
          setFormValues({
            nome: '',
            email: '',
            mensagem: '',
          });
        })
        .catch(error => {
          toaster.push(emailError, { duration: 5000 });
        });
    }
  }

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleVerify = async () => {
    verifyCallback();
    if (executeRecaptcha && apiIsReady) {
      setShowEmailAPI(true);
    } else {
      setShowEmailAPI(false);
    }
  }

  const emailError = (
    <Message showIcon type='error' closable>
      Erro ao enviar o email
    </Message>
  );

  const emailSuccess = (
    <Message showIcon type='success' closable>
      Email enviado com sucesso
    </Message>
  );

  return (
    <div className="contatos">

      <div className='contatos-section'>
        <div className='contatos-esquerdo'>
          <h1 className="titulo-contatos">Contatos</h1>
          <p className='contatos-item'>Telefone: (84) 98159-3183</p>
          <p className='contatos-item'>Gmail: rubenfilipe.net@gmail.com</p>
          <h1 className='titulo-redes-sociais'>Redes Sociais</h1>

          <a href='https://www.linkedin.com/in/rubenfilipe07/' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Linkedin} alt='linkedin' /></a>
          <a href='https://t.me/ruben_filipe07' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Telegram} alt='telegram' /></a>
          <a href='https://wa.me/5584981593183' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Whatsapp} alt='whatsapp' /></a>
          <a href='https://github.com/rubenfilipe07' target='_blank' rel="noreferrer"><img className='redes-sociais' src={Github} alt='github' /></a>
        </div>


        <div className='contatos-direito'>
          <h1 className='titulo-fale-comigo'>Fale Comigo</h1>

          {!showEmailAPI && (
            <div className='card-email'>
              <img src={Gmail} alt='gmail' width={100} height={100}></img>
              <a href='mailto:rubenfilipe.net@gmail.com'>
                <div className='botao-gmail'>Enviar Email</div>
              </a>
            </div>
          )}

          {showEmailAPI && (

            <Form fluid ref={formRef} model={model} onCheck={setFormError} onSubmit={handleSubmit} onChange={setFormValues} checkTrigger="change" formValue={formValues} className="formulario-email-dinamico">
              <CampoTexto name="nome" label="Nome" />
              <CampoTexto name="email" label="Email" />
              <CampoMensagem name="mensagem" label="Mensagem" />


              <Button appearance="primary" type="submit" block={true} size='lg'>
                Enviar Email
              </Button>
            </Form>
          )}

        </div>

        <GoogleReCaptcha onVerify={handleVerify} />
      </div>
    </div>

  );
}

export default Contatos;
