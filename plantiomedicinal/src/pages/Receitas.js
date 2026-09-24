import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Receitas.css';
import Footer from '../components/Footer';
import CampoPesquisa from '../components/CampoPesquisa';

// Estrutura de dados com todas as receitas agrupadas por categoria
const categoriasReceitas = [
  {
    categoria: "Chás",
    itens: [
      { nome: "Chá de Hortelã", link: "/Receitas1" },
      { nome: "Chá de Camomila", link: "/Receitas2" },
      { nome: "Chá de Gengibre", link: "/Receitas3" }
    ]
  },
  {
    categoria: "Sucos",
    itens: [
      { nome: "Suco de Detox Verde", link: "/Receitas4" },
      { nome: "Suco de Cenoura com Laranja", link: "/Receitas5" },
      { nome: "Suco de Abacaxi com Hortelã", link: "/Receitas6" }
    ]
  },
  {
    categoria: "Xaropes",
    itens: [
      { nome: "Xarope de Mel com Limão", link: "/Receitas7" },
      { nome: "Xarope de Gengibre", link: "/Receitas8" },
      { nome: "Xarope de Alho", link: "/Receitas9" }
    ]
  },
  {
    categoria: "Pomadas",
    itens: [
      { nome: "Pomada de Babosa", link: "/Receitas10" },
      { nome: "Pomada de Calêndula", link: "/Receitas11" },
      { nome: "Pomada de Ervas", link: "/Receitas12" }
    ]
  },
  {
    categoria: "Banhos Medicinais",
    itens: [
      { nome: "Banho de Camomila", link: "/Receitas13" },
      { nome: "Banho de Alecrim", link: "/Receitas14" },
      { nome: "Banho de Erva Cidreira", link: "/Receitas15" }
    ]
  },
  {
    categoria: "Óleos Medicinais",
    itens: [
      { nome: "Óleo de Hortelã", link: "/Receitas16" },
      { nome: "Óleo de Alecrim", link: "/Receitas17" },
      { nome: "Óleo de Lavanda", link: "/Receitas18" }
    ]
  }
];

function Receitas() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  // Atualiza o estado quando a busca for disparada no componente CampoPesquisa
  const handleBuscar = (termo) => {
    setTermoPesquisa(termo);
  };

  // Filtra as categorias e os itens de acordo com o texto digitado
  const categoriasFiltradas = categoriasReceitas
    .map((cat) => {
      const termo = termoPesquisa.toLowerCase();

      // Se o termo corresponder ao nome da categoria (ex: "Chás"), exibe todos os itens dela
      if (cat.categoria.toLowerCase().includes(termo)) {
        return cat;
      }

      // Caso contrário, filtra apenas os itens que contêm o termo no nome
      const itensFiltrados = cat.itens.filter((item) =>
        item.nome.toLowerCase().includes(termo)
      );

      return {
        ...cat,
        itens: itensFiltrados
      };
    })
    // Remove categorias que não possuem nenhum item após a filtragem
    .filter((cat) => cat.itens.length > 0);

  return (
    <main>
      <section className="inicioReceita">
        <h1>Conheça as principais <strong>RECEITAS MEDICINAIS</strong></h1>
        <p>
          Principais receitas medicinais reunindo preparos naturais como chás, xaropes e infusões, com orientações simples para uso no dia a dia. Uma forma prática de aproveitar os benefícios das plantas para o bem-estar.
        </p>
      </section>

      {/* Componente de Pesquisa */}
      <CampoPesquisa onSearch={handleBuscar} placeholder="Pesquisar receitas..." />
      <hr />

      {/* Área dos Cards de Receitas */}
      <section className="grupoCards">
        {categoriasFiltradas.length > 0 ? (
          categoriasFiltradas.map((cat, index) => (
            <div key={index} className="receitas">
              <div className="card">
                <h3>{cat.categoria}</h3>
                <ul>
                  {cat.itens.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link to={item.link}>{item.nome}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="semResultados">Nenhuma receita encontrada para "{termoPesquisa}".</p>
        )}
      </section>

      {/* Card Você Sabia */}
      <section className="card-voce-sabia">
        <div className="icone-sabia">
          <i className="bi bi-lightbulb-fill"></i>
        </div>

        <div className="conteudo-sabia">
          <span className="titulo-sabia">Você sabia?</span>
          <p>
            Na área de <strong>Postagens</strong>, você pode publicar suas próprias receitas 
            feitas com plantas medicinais e conhecer receitas compartilhadas 
            por outras pessoas. Além disso, compartilhe fotos e vídeos do seu 
            jardim, plantas e experiências com o cultivo. Compartilhe seus 
            conhecimentos e inspire outras pessoas!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Receitas;