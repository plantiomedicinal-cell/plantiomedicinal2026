import React from 'react';
import { Link } from 'react-router-dom';

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

          <div className="infoConjunto">
            <span className="infoSpan">
              <img src="/img/logo1.png" alt="Logo" />
              <b>+ de 20 espécies diferentes</b>
            </span>

            <Link to="/sobre">
              <button className="infoBotao">
                <b>SAIBA MAIS!</b>
              </button>
            </Link>
          </div>
        </div>

        <div className="infoImagem">
          <img src="/img/4.png" alt="Logo" />
        </div>
      </div>

      <hr className="divisao1" />
      <hr className="divisao2" />

      <article className="containerCards">
        <section className="catalogoPrevia">
          <div className="catalogo">
            <h1 className="descricao">Conheça algumas espécies do catálogo</h1>
          </div>

          <div className="cards">
            {/* CARD 1 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/ORA PRO NOBIS.jpg" alt="Ora Pro Nobis" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Ora Pro Nobis</h2>
                <h3 className="nomeC">Pereskia aculeata</h3>
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

      <h2 className="receitas">
        Descubra novas<br /> <b>receitas.</b>
      </h2>
    </main>
  );
}

export default Inicio;