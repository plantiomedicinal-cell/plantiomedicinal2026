import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

function Inicio() {
  return (
    <>
    <main>
      <section className="info">
        <div className="infoTexto">
          <h1>
            Faça seu jardim <br />
            <strong>MEDICINAL</strong> <br />
            agora, na sua casa!
          </h1>

          <p>
            Veja as plantas medicinais com segurança. Consulte fichas
            técnicas detalhadas de espécies vegetais, filtre por
            características e encontre a planta ideal para cada projeto
            de plantio.
          </p>

      <div className="informacoes">
          <div className="infoSpan">
              <div className="iconeSpan">
                  <i className="bi bi-leaf"></i>
              </div>

              <div className="textoSpan">
                  <b>+6</b>
                  <span>espécies</span>
              </div>
          </div>

          <div className="infoSpan">
              <div className="iconeSpan">
                  <i class="bi bi-cup-hot"></i>
              </div>

              <div className="textoSpan">
                  <b>+10</b>
                  <span>receitas</span>
              </div>
          </div>
      </div>
      </div>

      <div className="infoImagem">
          <img src="/img/icons/personagem1.png" alt="Logo" />
        </div>
      </section>

      <div className="divisao1" />
      <div className="divisao2" />

      <section className="containerCards">
        <div className="catalogoPrevia">
            <h1 className="previaTitulo-catalogo">Conheça algumas espécies do nosso catálogo</h1>

          <div className="cards">
            {/* CARD 1 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/orapronobis.webp" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/alecrim.webp" alt="Alecrim" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Alecrim</h2>
                <h3 className="nomeC">Salvia rosmarinus</h3>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/pimentamacaco.webp" alt="Pimenta Macaco" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Pimenta Macaco</h2>
                <h3 className="nomeC">Xylopia aromatica</h3>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/moringa.webp" alt="Moringa" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Moringa</h2>
                <h3 className="nomeC">Moringa oleifera</h3>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/louro.webp" alt="Louro" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Louro</h2>
                <h3 className="nomeC">Laurus nobilis L.</h3>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/plantas/guaco.webp" alt="Guaco" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Guaco</h2>
                <h3 className="nomeC">Mikania glomerata</h3>
              </div>
            </div>
          </div>

          <div className="verCatalogo">
            <Link to="/catalogo">
              <button className="botaoCatalogo">
                <b>VER CATÁLOGO COMPLETO</b>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="divisao4" />

      <section className="receitasPrevia">
        <div className="receitasCabecalho">
          <h2 className="previaTitulo-receita">
            Descubra novas<br/> <strong>receitas.</strong>
          </h2>

          <div class="textoReceita">
          <p>Plantas Medicinais podem ser ultilizadas de diversas formas para promover saúde e bem-estar, sendo uma prática tradicional que atravessa gerações. Com elas, é possível preparar receitas naturais como chás, infusões, xaropes, pomadas, e até banhos terapêuticos, cada um com finalidades específicas</p>
          </div>
        </div>

        <div class="trioImagem">

            <div class="img1">
                <img src="./img/icons/planta.png" alt="Imagem Planta"/> 
                <h2 class="textoTrio1">Plante e Colha</h2>
            </div>

            <div class="img2">
                <img src="./img/icons/personagem2.png" alt="Imagem Profissional"/>
                <h2 class="textoTrio2">Faça e Cozinhe</h2>
            </div>

            <div class="img3">
                <img src="./img/icons/livro.png" alt="Imagem Livro"/>
                <h2 class="textoTrio3">Mostre seu Resultado</h2>
            </div>
          </div>
        </section>

        <div className="divisao1" />
        <div className="divisao2" />

    </main>

    <Footer />
    </>
  );
}

export default Inicio;