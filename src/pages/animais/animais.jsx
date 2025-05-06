import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import logo from '../../img/logologin.png';
import './animais.css';

export default function Animais() {
  return (
    <div className="animais-container">
      <aside className="sidebar">
      <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li>📋 Dashboard</li>
            <li>👤 Clientes</li>
            <li>🧳 Serviços</li>
            <li className="active">🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair <FiLogOut /></button>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <span className="data">18/04/2023</span>
          <h1>Animais</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Bixanuuu apelão" />
          <button>🔍 Pesquisar</button>
        </div>

        <div className="results-count">5 resultados</div>

        <div className="animal-cards">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animal-card">
              <div className="animal-info">
                <div className="animal-header">
                  <div className="avatar" />
                  <div>
                    <strong>Nome do animal</strong><br />
                    Nome do dono
                  </div>
                </div>
                <p>
                  <strong>Animal:</strong> Gato&nbsp;&nbsp;
                  <strong>Sexo:</strong> Masculino&nbsp;&nbsp;
                  <strong>Idade:</strong> 8 anos
                </p>
                <p>
                  <strong>Deficiências:</strong> Autismo<br />
                  <strong>Intolerâncias:</strong> Medicamentos com base em cocaína
                </p>
                <p className="last-appointment">
                  Último atendimento: 14/02/2022&nbsp;&nbsp;
                  <span>Contato: (13) 9684-4814</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="add-button">➕ Adicionar</button>
      </main>
    </div>
  );
}
