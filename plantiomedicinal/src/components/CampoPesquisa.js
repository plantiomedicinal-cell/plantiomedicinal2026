
import React, { useState } from 'react';
import './CampoPesquisa.css';

export default function CampoPesquisa({ onSearch, placeholder = "Pesquisar receitas" }) {
  const [termo, setTermo] = useState('');

  return (
    <div className="campoPesquisa">
      <i className="bi bi-search"></i>

      <input
        type="text"
        id="pesquisaReceitas"
        placeholder={placeholder}
        value={termo}
        onChange={(e) => {
          setTermo(e.target.value);
          onSearch(e.target.value);
        }}
        autoComplete="off"
      />
    </div>
  );
}
