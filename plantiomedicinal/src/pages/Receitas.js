
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
    nome: "Chá Calmante de Erva-Cidreira e Camomila",
    categoria: "Chás",
    descricao: "Uma infusão suave e aromática para momentos de tranquilidade.",
    imagem: "/img/postagens/chacamomilaervacidreira.jpg",
    link: "/Receitas2"
  },
  {
    nome: "Xarope Natural de Gengibre com Mel",
    categoria: "Xaropes",
    descricao: "Conheça os ingredientes e o modo de preparo desta receita tradicional.",
    imagem: "/img/postagens/xaropemelgengibre.jpg",
    link: "/Receitas8"
  },
  {
    nome: "Tônico Capilar de Alecrim",
    categoria: "Cuidados naturais",
    descricao: "Uma preparação de alecrim para sua rotina de cuidados capilares.",
    imagem: "/img/postagens/tonicoalecrim.jpg",
    link: "/Receitas17"
  },
  {
    nome: "Chá de Hortelã",
    categoria: "Chás",
    descricao: "Aprenda a preparar uma infusão aromática de hortelã.",
    imagem: "/img/postagens/hortela.webp",
    link: "/Receitas1"
  },
  {
    nome: "Chá de Gengibre",
    categoria: "Chás",
    descricao: "Veja os ingredientes e as etapas de preparo desta infusão.",
    imagem: "/img/postagens/chagengibre.jpg",
    link: "/Receitas3"
  },
  {
    nome: "Suco Detox Verde",
    categoria: "Sucos",
    descricao: "Uma combinação de ingredientes vegetais para variar sua alimentação.",
    imagem: "/img/postagens/sucoverde.jpg",
    link: "/Receitas4"
  },
  {
    nome: "Suco de Cenoura com Laranja",
    categoria: "Sucos",
    descricao: "Uma bebida com cenoura e laranja, fácil de preparar.",
    imagem: "/img/postagens/sucocenouralaranja.jpg",
    link: "/Receitas5"
  },
  {
    nome: "Suco de Abacaxi com Hortelã",
    categoria: "Sucos",
    descricao: "Uma combinação refrescante de frutas com hortelã.",
    imagem: "/img/postagens/sucoabacaxihortela.jpg",
    link: "/Receitas6"
  },
  {
    nome: "Xarope de Mel com Limão",
    categoria: "Xaropes",
    descricao: "Confira os ingredientes e os cuidados desta preparação caseira.",
    imagem: "/img/postagens/xaropemellimao.jpg",
    link: "/Receitas7"
  },
  {
    nome: "Xarope de Alho",
    categoria: "Xaropes",
    descricao: "Conheça esta preparação tradicional e seus cuidados de uso.",
    imagem: "/img/postagens/xaropealho.jpg",
    link: "/Receitas9"
  },
  {
    nome: "Pomada de Babosa",
    categoria: "Pomadas",
    descricao: "Conheça uma preparação com babosa e os cuidados necessários.",
    imagem: "/img/postagens/pomadababosa.jpg",
    link: "/Receitas10"
  },
  {
    nome: "Pomada de Calêndula",
    categoria: "Pomadas",
    descricao: "Veja os ingredientes e as orientações desta preparação.",
    imagem: "/img/postagens/pomadacalendula.jpg",
    link: "/Receitas11"
  },
  {
    nome: "Pomada de Ervas",
    categoria: "Pomadas",
    descricao: "Conheça uma preparação tradicional à base de ervas.",
    imagem: "/img/postagens/pomadaervas.jpg",
    link: "/Receitas12"
  },
  {
    nome: "Banho de Camomila",
    categoria: "Banhos Medicinais",
    descricao: "Aprenda sobre o preparo de um banho com camomila.",
    imagem: "/img/postagens/banhocamomila.jpg",
    link: "/Receitas13"
  },
  {
    nome: "Banho de Alecrim",
    categoria: "Banhos Medicinais",
    descricao: "Conheça o preparo e os cuidados de um banho de alecrim.",
    imagem: "/img/postagens/banhoalecrim.jpg",
    link: "/Receitas14"
  },
  {
    nome: "Banho de Erva-Cidreira",
    categoria: "Banhos Medicinais",
    descricao: "Veja como preparar um banho com erva-cidreira.",
    imagem: "/img/postagens/banhoervacidreira.jpg",
    link: "/Receitas15"
  },
  {
    nome: "Óleo de Hortelã",
    categoria: "Óleos Medicinais",
    descricao: "Conheça esta preparação e os cuidados para seu uso.",
    imagem: "/img/postagens/oleohortela.jpg",
    link: "/Receitas16"
  },
  {
    nome: "Óleo de Alecrim",
    categoria: "Óleos Medicinais",
    descricao: "Confira informações sobre a preparação de óleo de alecrim.",
    imagem: "/img/postagens/oleoalecrim.jpg",
    link: "/Receitas17"
  },
  {
    nome: "Óleo de Lavanda",
    categoria: "Óleos Medicinais",
    descricao: "Conheça esta preparação e as orientações para uso seguro.",
    imagem: "/img/postagens/oleolavanda.jpg",
    link: "/Receitas18"
  }
];

// Componente principal da página de receitas.
function Receitas() {

  // useState cria um estado, ou seja, uma informação
  // que o React consegue acompanhar e atualizar na tela.
  //
  // termoPesquisa guarda o texto que o usuário pesquisou.
  // setTermoPesquisa altera o valor desse texto.
  // "" significa que a pesquisa começa vazia.
  const [termoPesquisa, setTermoPesquisa] = useState("");

  // paginaAtual guarda o número da página que está aberta.
  // setPaginaAtual permite trocar a página.
  // O valor 1 indica que a primeira página será exibida inicialmente.
  const [paginaAtual, setPaginaAtual] = useState(1);

  // filter percorre a lista de receitas e mantém somente
  // aquelas que correspondem ao texto pesquisado.
  const receitasFiltradas = receitas.filter((receita) =>

    // Junta o nome e a categoria para permitir pesquisar
    // tanto pelo nome quanto pela categoria da receita.
    (receita.nome + " " + receita.categoria)

      // toLowerCase transforma o texto em letras minúsculas.
      // Assim, pesquisar "CHÁ" ou "chá" funciona da mesma forma.
      .toLowerCase()

      // trim remove espaços desnecessários no começo e no fim.
      // includes verifica se o texto pesquisado está presente
      // no nome ou na categoria.
      .includes(termoPesquisa.trim().toLowerCase())
  );

  // Math.ceil arredonda um resultado para cima.
  // Dividimos a quantidade de receitas encontradas por 3,
  // porque queremos mostrar três cards por página.
  //
  // Exemplo: 7 receitas / 3 = 2,33.
  // Math.ceil transforma 2,33 em 3 páginas.
  const totalPaginas = Math.ceil(receitasFiltradas.length / 3);

  // Math.max garante que o menor valor considerado seja 1.
  // Math.min impede que a página atual ultrapasse o total.
  //
  // Isso evita problemas quando a pesquisa encontra menos
  // receitas do que a página que estava aberta anteriormente.
  const paginaValida = Math.min(
    paginaAtual,
    Math.max(totalPaginas, 1)
  );

  // return define o conteúdo que será exibido na página.
  return (
    <main className="paginaReceitas">

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

      {/* CampoPesquisa é um componente separado.
          onSearch recebe o texto pesquisado quando esse componente
          dispara a pesquisa. */}

      <div className="pesquisaReceitas">
        <CampoPesquisa
          placeholder="Pesquisar receitas..."

          // Quando a pesquisa é realizada, atualizamos o texto.
          // Também voltamos para a primeira página, pois os
          // resultados podem ser diferentes dos anteriores.
          onSearch={(termo) => {
            setTermoPesquisa(termo);
            setPaginaAtual(1);
          }}
        />
      </div>

      {/* Linha horizontal para separar as áreas da página. */}
      <hr className="divisorReceitas" />

      {/* Container principal que reúne os cards e a paginação. */}
      <section className="lista-receitas">

        {/* Cabeçalho que mostra o título e a quantidade
            de receitas encontradas na pesquisa. */}
        <div className="cabecalho-lista">
          <h2>Receitas disponíveis</h2>

          <span>
            {receitasFiltradas.length} receitas encontradas
          </span>
        </div>

        {/* Verifica se a pesquisa encontrou alguma receita.
            Se encontrou, mostra os cards.
            Caso contrário, mostra uma mensagem alternativa. */}
        {receitasFiltradas.length > 0 ? (
          <>

            {/* slice separa somente as receitas da página atual.
                O primeiro número indica onde começar.
                O segundo número indica onde parar, sem incluir
                a posição final.

                Exemplo:
                Página 1: posições 0, 1 e 2.
                Página 2: posições 3, 4 e 5.
                Página 3: posições 6, 7 e 8.

                map percorre as receitas selecionadas e cria
                um card para cada uma delas. */}
            {receitasFiltradas
              .slice(
                (paginaValida - 1) * 3,
                paginaValida * 3
              )
              .map((receita) => (

                // key ajuda o React a identificar cada card
                // quando a lista de resultados muda.
                <article
                  className="card-receita"
                  key={receita.nome}
                >

                  {/* Mostra a imagem correspondente à receita.
                      alt fornece uma descrição da imagem.
                      onError oculta a imagem se o arquivo não
                      for encontrado. */}
                  <img
                    src={receita.imagem}
                    alt={receita.nome}
                    onError={(evento) => {
                      evento.currentTarget.style.visibility = "hidden";
                    }}
                  />

                  {/* Área com as informações da receita. */}
                  <div className="info-receita">

                    {/* Mostra a categoria da receita. */}
                    <span className="categoria-receita">
                      {receita.categoria}
                    </span>

                    {/* Mostra o nome da receita. */}
                    <h3>{receita.nome}</h3>

                    {/* Mostra a descrição da receita. */}
                    <p>{receita.descricao}</p>

                    {/* Link leva o usuário para a página
                        específica daquela receita.
                        O destino vem da propriedade link
                        do objeto correspondente. */}
                    <Link
                      to={receita.link}
                      className="btn-receita"
                    >
                      Ver receita
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                  </div>
                </article>
              ))}

            {/* A paginação só aparece quando existem
                duas ou mais páginas de resultados. */}
            {totalPaginas > 1 && (
              <nav
                className="paginacao-receitas"
                aria-label="Paginação das receitas"
              >

                {/* Botão para voltar uma página.
                    Fica desativado quando estamos na primeira. */}
                <button
                  type="button"
                  disabled={paginaValida === 1}
                  onClick={() => setPaginaAtual(paginaValida - 1)}
                  aria-label="Página anterior"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                {/* Array.from cria uma sequência com a quantidade
                    de páginas necessária.

                    Exemplo: se totalPaginas for 3, teremos
                    os números 1, 2 e 3.

                    map transforma cada número em um botão. */}
                {Array.from(
                  { length: totalPaginas },
                  (_, indice) => (

                    // Cada botão representa uma página.
                    <button
                      type="button"
                      key={indice + 1}

                      // Aplica a classe página-ativa somente
                      // ao botão da página atualmente selecionada.
                      className={
                        paginaValida === indice + 1
                          ? "pagina-ativa"
                          : ""
                      }

                      // Informa aos leitores de tela qual
                      // botão representa a página atual.
                      aria-current={
                        paginaValida === indice + 1
                          ? "page"
                          : undefined
                      }

                      // Ao clicar, atualiza a página atual.
                      onClick={() => setPaginaAtual(indice + 1)}
                    >
                      {indice + 1}
                    </button>
                  )
                )}

                {/* Botão para avançar uma página.
                    Fica desativado quando chegamos à última. */}
                <button
                  type="button"
                  disabled={paginaValida === totalPaginas}
                  onClick={() => setPaginaAtual(paginaValida + 1)}
                  aria-label="Próxima página"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>

              </nav>
            )}

          </>
        ) : (

          // Esta área aparece quando nenhuma receita
          // corresponde ao texto que foi pesquisado.
          <div className="receitas-vazias">
            <i className="bi bi-search"></i>

            <h3>Nenhuma receita encontrada</h3>

            <p>
              Tente pesquisar por outro nome ou categoria.
            </p>

            {/* Botão que limpa a pesquisa e volta à primeira página. */}
            <button
              type="button"
              onClick={() => {
                setTermoPesquisa("");
                setPaginaAtual(1);
              }}
            >
              Limpar pesquisa
            </button>
          </div>
        )}

      </section>

      {/* Card informativo abaixo da lista de receitas. */}
      <section className="card-voce-sabia">

        <div className="icone-sabia">
          <i className="bi bi-lightbulb-fill"></i>
        </div>

        <div className="conteudo-sabia">
          <span className="titulo-sabia">
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

      {/* Rodapé reutilizado de outro componente do projeto. */}
      <Footer />

    </main>
  );
}

// Permite importar o componente Receitas em outros arquivos.
export default Receitas;
