
import React, { Fragment, useEffect, useState } from 'react'
import './Projetos.css'
import ProjetoItem from '../ProjetosItem/ProjetosItem';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projetos() {

  const [dataProjetos, setDataProjetos] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL+"/projetos", {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY
      }
    })
      .then(function (response) {
        setDataProjetos(response.data);
      })
  }, []);


  return (
    <Fragment>
      {dataProjetos !== undefined ? (
        <div className="projetos">
          <div className='grid-projetos'>
            <div className='esquerdo'>
              <h1 className="titulo-projetos">Projetos</h1>
              <p className='descricao-projetos'>Esta é uma galeria que mostra alguns dos meus projetos mais recentes. Cada projeto aqui é uma amostra do meu trabalho e do meu estilo de programação. Interessado em ver mais? Acesse meu <a href='https://github.com/RubenFilipe07'>github</a></p>
            </div>
            <div className='direito'>
              <Slider
                className="slider variable-width"
                dots={false}
                infinite={false}
                speed={300}
                slidesToShow={1} 
                slidesToScroll={3} 
                variableWidth={true}
                arrows={false}
                autoplay={false}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                    }
                  }
                ]}
              >
                {dataProjetos.map((projeto) => (
                  <ProjetoItem
                    url={projeto.url}
                    key={projeto.id}
                    imagem_principal_url={projeto.imagem_principal_url}
                    titulo={projeto.titulo}
                    descricao={projeto.descricao}
                    tecnologias_utilizadas={projeto.tecnologias_utilizadas}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
    );
  
  }





export default Projetos;
