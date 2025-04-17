import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Principal from '../../img/mascotes.png'; // <-- caminho corrigido

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>VetBagda</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/quem-somos">Quem somos</Link></li>
            <li><Link to="/servicos-container">Seviços</Link></li>
            <li><Link to="/agendamento">Área do Vet</Link></li>
          </ul>
        </nav>
      </header>

      <main className="vet-container">
  <div className="vet-card">
    <h1 className="vet-title">Veterinária Bagdá</h1>
    <p className="vet-description">
      Cuidamos do seu pet com carinho e dedicação<br />
      para uma vida mais saudável e feliz.
    </p>
    <button className="vet-button">AGENDAR CONSULTA PELO FÓRUM</button>
  </div>
  <img src={Principal} alt="mascotes" title="img mascotes" className="vet-image" />
</main>

    </div>
  );
}
