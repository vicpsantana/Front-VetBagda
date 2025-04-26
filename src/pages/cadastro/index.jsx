import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/logologin.png';
import { FiLogOut } from 'react-icons/fi'; // Apenas o ícone de Logout foi mantido
import './index.css'; // Estilos para o componente

export default function Cadastro() {
  const [idBusca, setIdBusca] = useState('');
  const [usuarioUnico, setUsuarioUnico] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    cpf: '',
    celular: '',
    data_nascimento: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  });

  const baseUrl = 'http://localhost:5001/usuarios'; // URL da API

  const today = new Date().toLocaleDateString('pt-BR');

  // Função para buscar todos os usuários
  const listarUsuarios = async () => {
    try {
      const res = await axios.get(baseUrl);
      setClientes(res.data);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    }
  };

  // Função para buscar usuário por ID
  const buscarPorId = async () => {
    if (!idBusca) return;
    try {
      const res = await axios.get(`${baseUrl}/${idBusca}`);
      setUsuarioUnico(res.data);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  // Função para criar um novo cliente
  const criarCliente = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    try {
      const res = await axios.post(baseUrl, novoCliente);
      alert('Cliente criado com sucesso!');
      // Limpa os campos após o sucesso
      setNovoCliente({
        nome: '',
        cpf: '',
        celular: '',
        data_nascimento: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: ''
      });
      listarUsuarios(); // Atualiza a lista de clientes após a criação
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert('Erro ao criar cliente. Tente novamente.');
    }
  };

  return (
    <div className="app-container">
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

      <main className="main-content">
        <div className="date-display">{today}</div>

        {/* Formulário para cadastro de novo cliente */}
        <div className="form-container">
          <div className="form-header">
            <h2>Novo cliente</h2>
            <button className="close-button">×</button>
          </div>
          <form className="client-form" onSubmit={criarCliente}>
            <label>
              Nome
              <input 
                type="text" 
                placeholder="Nome" 
                value={novoCliente.nome}
                onChange={(e) => setNovoCliente({ ...novoCliente, nome: e.target.value })}
                required
              />
            </label>

            <label>
              CPF
              <input 
                type="text" 
                placeholder="CPF" 
                value={novoCliente.cpf}
                onChange={(e) => setNovoCliente({ ...novoCliente, cpf: e.target.value })}
                required
              />
            </label>

            <div className="inline-group">
              <label>
                Celular
                <input 
                  type="text" 
                  placeholder="Celular" 
                  value={novoCliente.celular}
                  onChange={(e) => setNovoCliente({ ...novoCliente, celular: e.target.value })}
                  required
                />
              </label>
              <label>
                Data de nasc.
                <input 
                  type="date" 
                  value={novoCliente.data_nascimento}
                  onChange={(e) => setNovoCliente({ ...novoCliente, data_nascimento: e.target.value })}
                  required
                />
              </label>
            </div>

            <label>
              Endereço
              <input 
                type="text" 
                placeholder="Endereço" 
                value={novoCliente.endereco}
                onChange={(e) => setNovoCliente({ ...novoCliente, endereco: e.target.value })}
                required
              />
            </label>

            <div className="inline-group">
              <label>
                Cidade
                <input 
                  type="text" 
                  placeholder="Cidade" 
                  value={novoCliente.cidade}
                  onChange={(e) => setNovoCliente({ ...novoCliente, cidade: e.target.value })}
                  required
                />
              </label>
              <label>
                Estado
                <input 
                  type="text" 
                  placeholder="Estado" 
                  value={novoCliente.estado}
                  onChange={(e) => setNovoCliente({ ...novoCliente, estado: e.target.value })}
                  required
                />
              </label>
            </div>

            <label>
              CEP
              <input 
                type="text" 
                placeholder="CEP" 
                value={novoCliente.cep}
                onChange={(e) => setNovoCliente({ ...novoCliente, cep: e.target.value })}
                required
              />
            </label>

            <button type="submit" className="save-button">Salvar</button>
          </form>
        </div>

        {/* Buscar Usuários */}
        <div className="search-container">
          <h2>Buscar por ID</h2>
          <input 
            type="number" 
            placeholder="ID do usuário" 
            value={idBusca} 
            onChange={(e) => setIdBusca(e.target.value)} 
          />
          <button onClick={buscarPorId}>Buscar</button>

          {usuarioUnico && (
            <pre>{JSON.stringify(usuarioUnico, null, 2)}</pre>
          )}
        </div>

        {/* Listagem de usuários */}
        <div className="user-list">
          <h2>Listar Usuários</h2>
          <button onClick={listarUsuarios}>Listar Todos</button>
          <pre>{JSON.stringify(clientes, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
}
