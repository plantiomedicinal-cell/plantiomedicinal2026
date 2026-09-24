import { Link } from 'react-router-dom';
import { useState } from "react";
import './Catalogo.css';

import Footer from '../components/Footer';
import CampoPesquisa from '../components/CampoPesquisa';

// 1. Array com os dados das plantas (adicione ou ajuste as propriedades conforme necessário)
const plantasData = [
  {
    id: 1,
    nomeP: "Ora Pro Nobis",
    nomeC: "Pereskia aculeata",
    img: "/img/orapronobis.webp",
    link: "/cientifico1",
    tags: ["Imunidade", "Pele", "Comestível", "Perene", "Brasil", "Fácil", "Em hortas", "Trepadeira"]
  },
  {
    id: 2,
    nomeP: "Alecrim",
    nomeC: "Salvia rosmarinus",
    img: "/img/alecrim.webp",
    link: "/cientifico2",
    tags: ["Digestão", "Imunidade", "Aromática", "Perene", "Resistente", "Europa", "Fácil", "Em vasos", "Arbustivo", "Médio"]
  },
  {
    id: 3,
    nomeP: "Pimenta Macaco",
    nomeC: "Xylopia aromatica",
    img: "/img/pimentamacaco.webp",
    link: "/cientifico3",
    tags: ["Dores", "Inflamação", "Aromática", "Brasil", "América do Sul", "Moderado", "Grande", "Arbustivo"]
  },
  {
    id: 4,
    nomeP: "Moringa",
    nomeC: "Moringa oleifera",
    img: "/img/moringa.webp",
    link: "/cientifico4",
    tags: ["Imunidade", "Comestível", "Resistente", "Ásia", "África", "Fácil", "Em jardins", "Grande"]
  },
  {
    id: 5,
    nomeP: "Louro",
    nomeC: "Laurus nobilis L.",
    img: "/img/louro.webp",
    link: "/cientifico5",
    tags: ["Digestão", "Aromática", "Perene", "Europa", "Moderado", "Em vasos", "Médio", "Arbustivo"]
  },
  {
    id: 6,
    nomeP: "Guaco",
    nomeC: "Mikania glomerata",
    img: "/img/guaco.webp",
    link: "/cientifico6",
    tags: ["Respiração", "Inflamação", "Perene", "Brasil", "América do Sul", "Fácil", "Trepadeira"]
  },
  {
    id: 7,
    nomeP: "Camomila",
    nomeC: "Matricaria chamomilla",
    img: "/img/camomila.webp",
    link: "/cientifico7",
    tags: ["Relaxamento", "Sono", "Digestão", "Florífera", "Aromática", "Europa", "Fácil", "Em vasos", "Pequeno"]
  },
  {
    id: 8,
    nomeP: "Hortelã",
    nomeC: "Mentha spicata",
    img: "/img/hortela.webp",
    link: "/cientifico8",
    tags: ["Digestão", "Respiração", "Aromática", "Comestível", "Perene", "Ásia", "Europa", "Fácil", "Em vasos", "Rasteiro"]
  },
  {
    id: 9,
    nomeP: "Boldo",
    nomeC: "Plectranthus barbatus",
    img: "/img/boldo.webp",
    link: "/cientifico9",
    tags: ["Digestão", "Aromática", "Resistente", "África", "Fácil", "Em vasos", "Arbustivo", "Médio"]
  }
];

function FiltroGrupo({ titulo, children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="grupoFiltro">
      <button
        type="button"
        className="tituloGrupo"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
      >
        <h3>{titulo}</h3>
        <i className={aberto ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
      </button>

      {aberto && (
        <div className="opcoesFiltro">
          {children}
        </div>
      )}
    </div>
  );
}

function Catalogo() {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);

  // Atualiza o termo de pesquisa vindo do componente CampoPesquisa
  const handleBuscar = (termo) => {
    setTermoPesquisa(termo);
  };

  // Trata a seleção/desseleção dos checkboxes
  const handleCheckboxChange = (e) => {
    const valor = e.target.value;
    if (e.target.checked) {
      setFiltrosSelecionados([...filtrosSelecionados, valor]);
    } else {
      setFiltrosSelecionados(filtrosSelecionados.filter((item) => item !== valor));
    }
  };

  // Função para checar se a opção está marcada
  const isChecked = (valor) => filtrosSelecionados.includes(valor);

  // Lógica de filtragem combinada (Pesquisa por Texto + Checkboxes)
  const plantasFiltradas = plantasData.filter((planta) => {
    // 1. Filtro por Texto (Nome popular ou científico)
    const termo = termoPesquisa.toLowerCase();
    const atendeTexto =
      planta.nomeP.toLowerCase().includes(termo) ||
      planta.nomeC.toLowerCase().includes(termo);

    // 2. Filtro por Checkboxes (A planta precisa conter TODOS os filtros selecionados)
    const atendeFiltros = filtrosSelecionados.every((filtro) =>
      planta.tags.includes(filtro)
    );

    return atendeTexto && atendeFiltros;
  });

  return (
    <main>
      <section className='inicioCatalogo'>
        <h1>Conheça nosso <strong>CATÁLOGO COMPLETO!</strong></h1>
        <p>
          Principais receitas medicinais reunindo preparos naturais como chás, xaropes e infusões, com orientações simples para uso no dia a dia. Uma forma prática de aproveitar os benefícios das plantas para o bem-estar.
        </p>
      </section>

      {/* Componente de Pesquisa Reutilizável */}
      <CampoPesquisa onSearch={handleBuscar} placeholder="Pesquisar plantas ou receitas..." />

      <div className="menuCatalogo">
        <section className="filtros">
          <div className="tituloFiltros">
            <i className="bi bi-funnel"></i>
            <h2>Filtros</h2>
          </div>

          {/* CUIDADOS */}
          <FiltroGrupo titulo="Cuidados">
            {["Digestão", "Imunidade", "Relaxamento", "Sono", "Pele", "Cabelos", "Cicatrização", "Respiração", "Dores", "Inflamação"].map((item) => (
              <label key={item} className="filtro">
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked(item)}
                  onChange={handleCheckboxChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </FiltroGrupo>

          {/* CARACTERÍSTICAS */}
          <FiltroGrupo titulo="Características">
            {["Aromática", "Perfumada", "Comestível", "Florífera", "Frutífera", "Perene", "Anual", "Rasteira", "Trepadeira", "Resistente"].map((item) => (
              <label key={item} className="filtro">
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked(item)}
                  onChange={handleCheckboxChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </FiltroGrupo>

          {/* ORIGEM */}
          <FiltroGrupo titulo="Origem">
            {["Brasil", "América do Sul", "América Central", "América do Norte", "Europa", "Ásia", "África"].map((item) => (
              <label key={item} className="filtro">
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked(item)}
                  onChange={handleCheckboxChange}
                />
                <span>{item}</span>
              </label>

            ))}
          </FiltroGrupo>

          {/* CULTIVO */}
          <FiltroGrupo titulo="Cultivo">
            {["Fácil", "Moderado", "Avançado", "Em vasos", "Em jardins", "Em hortas"].map((item) => (
              <label key={item} className="filtro">
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked(item)}
                  onChange={handleCheckboxChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </FiltroGrupo>

          {/* PORTE */}
          <FiltroGrupo titulo="Porte">
            {["Pequeno", "Médio", "Grande", "Rasteiro", "Arbustivo", "Trepadeira"].map((item) => (
              <label key={item} className="filtro">
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked(item)}
                  onChange={handleCheckboxChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </FiltroGrupo>
        </section>

        {/* ÁREA DAS PLANTAS FILTRADAS */}
        <article className="containerCardsCatalogo">
          <section className="catalogo">
            <div className="cardsCatalogo">
              {plantasFiltradas.length > 0 ? (
                plantasFiltradas.map((planta) => (
                  <div key={planta.id} className="plantasCatalogo">
                    <Link to={planta.link} className="quadroImg">
                      <img src={planta.img} alt={planta.nomeP} />
                    </Link>
                    <div className="textosCatalogo">
                      <h2 className="nomeP">{planta.nomeP}</h2>
                      <h3 className="nomeC">{planta.nomeC}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p className="semResultados">Nenhuma planta encontrada com os filtros selecionados.</p>
              )}
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}

export default Catalogo;