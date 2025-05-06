import React from 'react';
import './pagFoto.css';
import recepcaoImg from '../components/img/recepcaolmg.jpg';
import consultorioImg from '../components/img/consultoriolmg.jpg';

const PagFoto = () => {
  return (
    <div className="imagens-container">
      <img src={recepcaoImg} alt="Recepção da clínica" className="imagem-PagFoto" />
      <img src={consultorioImg} alt="Sala de consulta" className="imagem-PagFoto" />
    </div>
  );
};

export default PagFoto;
