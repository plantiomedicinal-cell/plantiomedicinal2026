// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';


import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Receitas from './pages/Receitas';
import Catalogo from './pages/Catalogo';
import Postagens from './pages/Postagens';
import Conta from './pages/Conta';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;