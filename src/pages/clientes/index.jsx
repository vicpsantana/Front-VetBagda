import React, { useState } from 'react';
import './index.css';
import logo from '../../img/logologin.png';
import { FiSearch, FiUser, FiMapPin, FiPhone, FiPlus, FiLogOut } from 'react-icons/fi';

export default function Clientes() {
  const [clientes] = useState([
    { nome: 'Cleiton Rasta', idade: 24, pets: 2 },
    { nome: 'Maluquinho da Silva', idade: 18, pets: 3 },
    { nome: 'Dracula com Síndrome de Wandinha', idade: 32, pets: 4 },
    { nome: 'Rasta Fire Esqueça Tudo Slk', idade: 28, pets: 2 },
  ]);

  return (
    <div className="clientes-container">
      <aside className="sidebar">
        <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li>📋 Dashboard</li>
            <li className="active">👤 Clientes</li>
            <li>🧳 Serviços</li>
            <li>🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair <FiLogOut /></button>
      </aside>

      <main className="clientes-main">
        <div className="clientes-header">
          <span className="date">18/04/2023</span>
          <h1>Clientes</h1>
        </div>

        <div className="clientes-search">
          <input type="text" placeholder="Cleiton Rasta" />
          <button><FiSearch /></button>
        </div>

        <div className="clientes-list">
          {clientes.map((cliente, index) => (
            <div className="cliente-card" key={index}>
              <p><FiUser /> {cliente.nome}, {cliente.idade} anos</p>
              <p><FiMapPin /> Registro - SP, 11900-000</p>
              <p>📍 Avenida bom dia e cia ai papai esqueça, 2258, Bairro maneiro</p>
              <p><FiPhone /> (13) 9648-9955</p>
              <div className="cliente-info-footer">
                <span>Cliente desde 11 de setembro de 2022</span>
                <span>🐶 {cliente.pets} pets</span>
              </div>
            </div>
          ))}
        </div>

        <button className="novo-btn"><FiPlus /> Novo</button>
      </main>
    </div>
  );
}