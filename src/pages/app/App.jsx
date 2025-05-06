import React from 'react';
import Header from '../header/header';
import QuemSomosNos from '../quemSomosNos';
import Servicos from '../servicos';
import AreaVet from '../areaVet';
import Dashboard from '../dashboard';
import Clientes from '../clientes';
import Cadastro from '../cadastro';
import Animais from '../animais/animais';
import NovoAnimal from '../novoAnimal/novoAnima';
import Footer from '../footer/footer';

//import LateralProject from '../../components/lateralProject';

import './App.css';

export default function App() {
  return (
    <div>
      <Header />

      <section id="inicio" className="section">
        <div className="vet-container">
          <div className="vet-card">
            <h1 className="vet-title">Veterinária Bagdá</h1>
            <p className="vet-description">
              Cuidamos do seu pet com carinho e dedicação<br />
              para uma vida mais saudável e feliz.
            </p>
            <button className="vet-button">AGENDAR CONSULTA PELO FÓRUM</button>
          </div>
          <img
            src={require('../../img/mascotes.png')}
            alt="mascotes"
            title="img mascotes"
            className="vet-image"
          />
        </div>
      </section>

      <section id="quem-somos" className="section">
        <QuemSomosNos />
      </section>

      <section id="servicos" className="section">
        <Servicos />
      </section>

      <section id="area-vet" className="section">
        <AreaVet />
      </section>

      <section id="dashboard" className="section">
        <Dashboard />
      </section>

      <section id="clientes" className="section">
        <Clientes />
      </section>

      <section id="cadastro" className="section">
        <Cadastro />
      </section>

      <section id="animais" className="section">
  <Animais />
</section>

<section id="novo-animal" className="section">
  <NovoAnimal />
</section>

<section id="footer" className="section">
  <Footer />
</section>


    </div>
  );
}
