import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Receitas.css";
import Footer from "../components/Footer";
import CampoPesquisa from "../components/CampoPesquisa";

// Lista com as informações de todas as receitas.
// Cada objeto representa uma receita e guarda seu nome,
// categoria, descrição, imagem e link para a página dela.
const receitas = [
  {
    nome: "Chá de Hortelã",
    categoria: "Chás",
    descricao: "Aprenda a preparar uma infusão aromática de hortelã.",
    imagem: "/img/receitas/hortela.webp",
    link: "/Receitas1"
  },
  {
    nome: "Chá Calmante de Erva-Cidreira e Camomila",
    categoria: "Chás",
    descricao: "Uma infusão suave e aromática para momentos de tranquilidade.",
    imagem: "/img/receitas/chacamomilaervacidreira.webp",
    link: "/Receitas2"
  },
  {
    nome: "Chá de Gengibre",
    categoria: "Chás",
    descricao: "Veja os ingredientes e as etapas de preparo desta infusão.",
    imagem: "/img/receitas/chagengibre.webp",
    link: "/Receitas3"
  },
  {
    nome: "Suco Detox Verde",
    categoria: "Sucos",
    descricao: "Uma combinação de ingredientes vegetais para variar sua alimentação.",
    imagem: "/img/receitas/sucoverde.webp",
    link: "/Receitas4"
  },
  {
    nome: "Suco de Cenoura com Laranja",
    categoria: "Sucos",
    descricao: "Uma bebida com cenoura e laranja, fácil de preparar.",
    imagem: "/img/receitas/sucocenouralaranja.webp",
    link: "/Receitas5"
  },
  {
    nome: "Suco de Abacaxi com Hortelã",
    categoria: "Sucos",
    descricao: "Uma combinação refrescante de frutas com hortelã.",
    imagem: "/img/receitas/sucoabacaxihortela.webp",
    link: "/Receitas6"
  },
  {
    nome: "Xarope de Mel com Limão",
    categoria: "Xaropes",
    descricao: "Confira os ingredientes e os cuidados desta preparação caseira.",
    imagem: "/img/receitas/xaropemellimao.webp",
    link: "/Receitas7"
  },
  {
    nome: "Xarope Natural de Gengibre com Mel",
    categoria: "Xaropes",
    descricao: "Conheça os ingredientes e o modo de preparo desta receita tradicional.",
    imagem: "/img/receitas/xaropemelgengibre.webp",
    link: "/Receitas8"
  },
  {
    nome: "Xarope de Alho",
    categoria: "Xaropes",
    descricao: "Conheça esta preparação tradicional e seus cuidados de uso.",
    imagem: "/img/receitas/xaropealho.webp",
    link: "/Receitas9"
  },
  {
    nome: "Pomada de Babosa",
    categoria: "Pomadas",
    descricao: "Conheça uma preparação com babosa e os cuidados necessários.",
    imagem: "/img/receitas/pomadababosa.webp",
    link: "/Receitas10"
  },
  {
    nome: "Pomada de Calêndula",
    categoria: "Pomadas",
    descricao: "Veja os ingredientes e as orientações desta preparação.",
    imagem: "/img/receitas/pomadacalendula.webp",
    link: "/Receitas11"
  },
  {
    nome: "Pomada de Ervas",
    categoria: "Pomadas",
    descricao: "Conheça uma preparação tradicional à base de ervas.",
    imagem: "/img/receitas/pomadaervas.webp",
    link: "/Receitas12"
  },
  {
    nome: "Banho de Camomila",
    categoria: "Banhos Medicinais",
    descricao: "Aprenda sobre o preparo de um banho com camomila.",
    imagem: "/img/receitas/banhocamomila.webp",
    link: "/Receitas13"
  },
  {
    nome: "Banho de Alecrim",
    categoria: "Banhos Medicinais",
    descricao: "Conheça o preparo e os cuidados de um banho de alecrim.",
    imagem: "/img/receitas/banhoalecrim.webp",
    link: "/Receitas14"
  },
  {
    nome: "Banho de Erva-Cidreira",
    categoria: "Banhos Medicinais",
    descricao: "Veja como preparar um banho com erva-cidreira.",
    imagem: "/img/receitas/banhoervacidreira.webp",
    link: "/Receitas15"
  },
  {
    nome: "Óleo de Hortelã",
    categoria: "Óleos Medicinais",
    descricao: "Conheça esta preparação e os cuidados para seu uso.",
    imagem: "/img/receitas/oleohortela.webp",
    link: "/Receitas16"
  },
  {
    nome: "Óleo de Alecrim",
    categoria: "Óleos Medicinais",
    descricao: "Confira informações sobre a preparação de óleo de alecrim.",
    imagem: "/img/receitas/oleoalecrim.webp",
    link: "/Receitas17"
  },
  {
    nome: "Óleo de Lavanda",
    categoria: "Óleos Medicinais",
    descricao: "Conheça esta preparação e as orientações para uso seguro.",
    imagem: "/img/receitas/oleolavanda.webp",
    link: "/Receitas18"
  }
];

function Receitas() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  // Atualiza o termo de pesquisa vindo do componente CampoPesquisa
  const handleBuscar = (termo) => {
        setTermoPesquisa(termo);
  };

  // Filtra as receitas de acordo com o termo pesquisado
  const receitasFiltradas = receitas.filter((receita) => {
  const termo = termoPesquisa.toLowerCase().trim();

  return (
    receita.nome.toLowerCase().includes(termo) ||
    receita.categoria.toLowerCase().includes(termo) ||
    receita.descricao.toLowerCase().includes(termo)
  );
});

  return (
    <>
    <main>

      {/* Cabeçalho com o título e a apresentação da página. */}
      <section className="inicioReceita">
        <h1>
          Conheça as principais{" "}
          <strong>RECEITAS MEDICINAIS</strong>
        </h1>

        <p>
          Descubra preparações com plantas medicinais, incluindo chás,
          sucos e outras receitas, com informações sobre ingredientes,
          preparo e cuidados importantes.
        </p>
      </section>

      <CampoPesquisa onSearch={handleBuscar} placeholder="Pesquisar receitas..." />

      {/* Lista de receitas. */}
      <section className="listaReceitas">
            {receitasFiltradas.map((receita, index) => (
          <div className="cardReceita" key={index}>

          <img src={receita.imagem} alt={receita.nome} />

          <div className="infoReceita">
            <h3>{receita.nome}</h3>

            <span><i>{receita.categoria}</i></span>

            <p>{receita.descricao}</p>
            
            <Link className="botaoReceita" to={receita.link}>
              Ver receita
            </Link>
          </div>

        </div>

      ))}
      {receitasFiltradas.length === 0 && (
        <p className="mensagemSemReceitas">
          Nenhuma receita encontrada.
        </p>
      )}

      </section>

      {/* Card informativo abaixo da lista de receitas. */}
      <section className="card-voce-sabia">

        <div className="iconeSabia">
          <i className="bi bi-lightbulb-fill"></i>
        </div>

        <div className="conteudoSabia">
          <span className="tituloSabia">
            Você sabia?
          </span>

          <p>
            Na área de <strong>Postagens</strong>, você pode compartilhar
            receitas, fotos e vídeos do seu jardim e trocar experiências
            sobre o cultivo de plantas. Compartilhe seus conhecimentos
            e inspire outras pessoas!
          </p>
        </div>

      </section>
    </main>

    <Footer />
    </>
  );
}

export default Receitas;
