import React from 'react';
import './novoAnimal.css';
import logo from '../../img/logologin.png';
import { FiLogOut } from 'react-icons/fi';

export default function NovoAnimal() {
  return (
    <div className="novo-animal-container">
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

      <div className="form-section">
        <h1>Novo animal</h1>
        <form className="form-animal">
          <div className="input-group">
            <label>CPF do cliente</label>
            <input type="text" placeholder="Digite o CPF" className="input-error" />
            <span className="error-text">Cliente não cadastrado</span>
          </div>

          <div className="input-group">
            <label>Nome do animal</label>
            <input type="text" placeholder="Nome do animal" />
          </div>

          <div className="input-group">
            <label>Deficiências</label>
            <input type="text" placeholder="Descreva deficiências (se houver)" />
          </div>

          <div className="input-group">
            <label>Intolerâncias</label>
            <input type="text" placeholder="Descreva intolerâncias (se houver)" />
          </div>

          <div className="row-group">
            <div className="input-group">
              <label>Data de nascimento</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Idade aproximada (Anos)</label>
              <input type="number" min="0" />
            </div>

            <div className="input-group">
              <label>Idade aproximada (Meses)</label>
              <input type="number" min="0" max="11" />
            </div>

            <div className="input-group">
              <label>Sexo</label>
              <div className="radio-group">
                <label><input type="radio" name="sexo" value="Masculino" /> Masculino</label>
                <label><input type="radio" name="sexo" value="Feminino" /> Feminino</label>
              </div>
            </div>
          </div>

          <button type="submit" className="save-btn">Salvar</button>
        </form>
      </div>
    </div>
  );
}
