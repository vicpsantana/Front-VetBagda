import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './pages/app/App'; //pag inicial


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header/header';
import QuemSomosNos from './pages/quemSomosNos/index'
import Servicos from './pages/servicos/index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/" element={<vet-container />} />
    <Route path="/quem-somos" element={<QuemSomosNos />} />
    <Route path="/servicos-container" element={<Servicos />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


