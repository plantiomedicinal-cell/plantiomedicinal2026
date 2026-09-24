import React, { useState, useEffect, useRef } from 'react';
import './CampoPesquisa.css'; // Importa os estilos do componente

export default function CampoPesquisa({ onSearch, placeholder = "Pesquisar receitas" }) {
  const [termo, setTermo] = useState('');
  const [historico, setHistorico] = useState([]);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const containerRef = useRef(null);

  const STORAGE_KEY = 'historico_receitas';
  const MAX_ITENS = 5;

  // Carrega o histórico ao iniciar
  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) setHistorico(JSON.parse(salvo));

    // Fecha o histórico ao clicar fora do componente
    const handleClickFora = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setMostrarDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickFora);
    return () => document.removeEventListener('mousedown', handleClickFora);
  }, []);

  // Salva no localStorage
  const salvarBusca = (texto) => {
    const textoLimpo = texto.trim();
    if (!textoLimpo) return;

    const novoHistorico = [
      textoLimpo,
      ...historico.filter((item) => item.toLowerCase() !== textoLimpo.toLowerCase()),
    ].slice(0, MAX_ITENS);

    setHistorico(novoHistorico);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novoHistorico));
  };

  // Dispara a busca
  const dispararBusca = (valor) => {
    salvarBusca(valor);
    setMostrarDropdown(false);
    
    // Se você passar uma função de busca por props, ela roda aqui:
    if (onSearch) {
      onSearch(valor);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispararBusca(termo);
    }
  };

  const selecionarHistorico = (item) => {
    setTermo(item);
    dispararBusca(item);
  };

  const removerItem = (e, itemParaRemover) => {
    e.stopPropagation();
    const novoHistorico = historico.filter((item) => item !== itemParaRemover);
    setHistorico(novoHistorico);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novoHistorico));
  };

  const limparHistorico = () => {
    setHistorico([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="campoPesquisa" ref={containerRef}>
      <i className="bi bi-search"></i>
      <input
        type="text"
        id="pesquisaReceitas"
        placeholder={placeholder}
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        onFocus={() => setMostrarDropdown(true)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />

      {mostrarDropdown && historico.length > 0 && (
        <div className="historicoDropdown">
          <div className="historicoHeader">
            <span>Pesquisas recentes</span>
            <button type="button" onClick={limparHistorico} className="btnLimpar">
              Limpar
            </button>
          </div>
          <ul className="historicoLista">
            {historico.map((item, index) => (
              <li key={index} onClick={() => selecionarHistorico(item)}>
                <div className="historicoItemConteudo">
                  <i className="bi bi-clock-history"></i>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}