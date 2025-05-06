import React, { useState } from "react";
import "./novoAtendimento.css";
import logo from '../../img/logologin.png';
import axios from "axios";

const API_URL = "http://localhost:2025";

export default function NovoAtendimento() {
  const [cpf, setCpf] = useState("");
  const [nomeAnimal, setNomeAnimal] = useState("");
  const [duracao, setDuracao] = useState("2h");
  const [descricao, setDescricao] = useState("");
  const [horario, setHorario] = useState("18h");
  const [preco, setPreco] = useState("R$ 75,00");

  const [clienteValido, setClienteValido] = useState(true);
  const [animalValido, setAnimalValido] = useState(true);

  const handleSalvar = async () => {
    try {
      // Verifica se o cliente existe
      const clienteResp = await axios.get(`${API_URL}/clientes/${cpf}`);
      if (!clienteResp.data) {
        setClienteValido(false);
        return;
      } else {
        setClienteValido(true);
      }

      // Verifica se o animal pertence ao cliente
      const animalResp = await axios.get(`${API_URL}/animais`, {
        params: { cpf: cpf, nome: nomeAnimal }
      });
      if (!animalResp.data || animalResp.data.length === 0) {
        setAnimalValido(false);
        return;
      } else {
        setAnimalValido(true);
      }

      // Salva o atendimento
      await axios.post(`${API_URL}/atendimentos`, {
        cpf,
        nomeAnimal,
        duracao,
        descricao,
        horario,
        preco
      });

      alert("Atendimento salvo com sucesso!");

      // Resetar formulário (opcional)
      setCpf("");
      setNomeAnimal("");
      setDuracao("2h");
      setDescricao("");
      setHorario("18h");
      setPreco("R$ 75,00");
    } catch (error) {
      console.error("Erro ao salvar atendimento:", error);
      alert("Erro ao salvar atendimento. Verifique o console.");
    }
  };

  return (
    <div className="container-novo-atendimento">
      <aside className="sidebar">
        <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li>📋 Dashboard</li>
            <li>👤 Clientes</li>
            <li className="active">🧳 Serviços</li>
            <li>🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair ⮕</button>
      </aside>

      <main className="form-container">
        <span className="data-topo">18/04/2023</span>
        <h1>Novo atendimento</h1>

        <div className="form-row">
          <div className="form-group">
            <label className={clienteValido ? "" : "erro"}>CPF do cliente</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className={clienteValido ? "" : "input-erro"}
            />
            {!clienteValido && (
              <small className="erro-msg">Cliente não cadastrado</small>
            )}
          </div>

          <div className="form-group">
            <label className={animalValido ? "" : "erro"}>Nome do animal</label>
            <input
              type="text"
              value={nomeAnimal}
              onChange={(e) => setNomeAnimal(e.target.value)}
              className={animalValido ? "" : "input-erro"}
            />
            {!animalValido && (
              <small className="erro-msg">
                Cliente não possui nenhum animal com este nome
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Duração</label>
            <input
              type="text"
              value={duracao}
              onChange={(e) => setDuracao(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o procedimento"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Horário de início</label>
            <input
              type="text"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input
              type="text"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
        </div>

        <button className="salvar-btn" onClick={handleSalvar}>💾 Salvar</button>
      </main>
    </div>
  );
}
