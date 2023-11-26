import React from 'react'
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function abrirCurriculo() {
    window.location.replace('https://ruben7.me/arquivos/Curr%C3%ADculo%20-%20R%C3%BAben%20Filipe.pdf')
}

function Curriculo() {
  return (
    <div>
    <Loader inverse center content="Abrindo" onLoad={abrirCurriculo()} />
  </div>
  );
}

export default Curriculo;
