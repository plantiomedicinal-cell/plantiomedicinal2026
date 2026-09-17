import React from 'react';
import { Link } from 'react-router-dom';

import Galeria from '../components/Galeria';
import Footer from '../components/Footer';

function Inicio() {
  return (
    <main>
      <div className="info">
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

<div className="infoSpans">

    <div className="infoSpan">
        <div className="iconeSpan">
            <i className="bi bi-leaf"></i>
        </div>

        <div className="textoSpan">
            <b>9</b>
            <span>espécies</span>
        </div>
    </div>

    <div className="infoSpan">
        <div className="iconeSpan">
            <i className="bi bi-droplet"></i>
        </div>

        <div className="textoSpan">
            <b>9</b>
            <span>filtros</span>
        </div>
    </div>
</div>
</div>

      <div className="infoImagem">
          <img src="/img/personagem1.png" alt="Logo" />
        </div>
      </div>

      <hr className="divisao1" />
      <hr className="divisao2" />

      <article className="containerCards">
        <section className="catalogoPrevia">
          <div className="catalogo">
            <h1 className="descricao">Conheça algumas espécies do nosso catálogo</h1>
          </div>

          <div className="cards">
            {/* CARD 1 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/orapronobis.webp" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/alecrim.webp" alt="Alecrim" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Alecrim</h2>
                <h3 className="nomeC">Salvia rosmarinus</h3>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/pimentamacaco.webp" alt="Pimenta Macaco" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Pimenta Macaco</h2>
                <h3 className="nomeC">Xylopia aromatica</h3>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/moringa.webp" alt="Moringa" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Moringa</h2>
                <h3 className="nomeC">Moringa oleifera</h3>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/louro.webp" alt="Louro" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Louro</h2>
                <h3 className="nomeC">Laurus nobilis L.</h3>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/guaco.webp" alt="Guaco" />
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
        </section>
      </article>

      <hr className="divisao4" />

      <div className="descubraTitulo">
        <h2 className="receitasPrevia">Descubra novas<br/> <strong>receitas.</strong></h2>
      

        <div class="textoReceita">
        <p>Plantas Medicinais podem ser ultilizadas de diversas formas para promover saúde e bem-estar, sendo uma prática tradicional que atravessa gerações. Com elas, é possível preparar receitas naturais como chás, infusões, xaropes, pomadas, e até banhos terapêuticos, cada um com finalidades específicas</p>
        </div>
        </div>

        <div class="trioImagem">

            <div class="img1">
                <img src="./img/planta.png" alt="Imagem Planta"/> 
                <h2 class="textoTrio1">Plante e Colha</h2>
            </div>

            <div class="img2">
                <img src="./img/personagem2.png" alt="Imagem Profissional"/>
                <h2 class="textoTrio2">Faça e Cozinhe</h2>
            </div>

            <div class="img3">
                <img src="./img/livro.png" alt="Imagem Livro"/>
                <h2 class="textoTrio3">Mostre seu Resultado</h2>
            </div>

        </div>

        <hr className="divisao1" />
        <hr className="divisao2" />

        <div className="containerPostagens">
        <div className="postagensTexto">
          <h1>
            Compartilhe o seu <strong>PLANTIO MEDICINAL</strong> conosco, na comunidade!
          </h1>

          <p>
            Mostre o crescimento das plantas, os
            cuidados no dia a dia e a beleza de
            cultivar a natureza. Um espaço para
            trocar experiências, ideias e
            inspirações sobre jardinagem de
            forma simples e natural.
          </p>

          <Galeria />

          </div>
        </div>
        <Footer />
    </main>

  );
}

export default Inicio;