import React from 'react';
import Header from '../header/header';
import QuemSomosNos from '../quemSomosNos';
import Servicos from '../servicos';
import AreaVet from '../areaVet';
import Dashboard from '../dashboard'; // ajuste o caminho se necessário
import Clientes from '../clientes'; // importando o componente Clientes
import Cadastro from '../cadastro'; // ajuste conforme o local correto do arquivo
import './App.css'; // opcional, caso queira um css global da App

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
        <Cadastro /> {/* Aqui renderiza o formulário novo */}
      </section>

    </div>
  );
}
