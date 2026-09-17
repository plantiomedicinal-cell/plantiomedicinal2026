import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './Catalogo.css'

import Footer from '../components/Footer';

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

        <i
          className={
            aberto
              ? "bi bi-chevron-up"
              : "bi bi-chevron-down"
          }
        ></i>

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

  return (

    <main>
      <div>
         <h1 className="inicio">Conheça nosso
        <strong>CATÁLOGO COMPLETO!</strong>
    </h1>
    </div>

    <p className='p'>
      Principais receitas medicinais reunindo preparos naturais como chás, xaropes e infusões, com orientações simples para uso no dia a dia. Uma forma prática de aproveitar os benefícios das plantas para o bem-estar.
    </p>

    <div className="barraPesquisa">
        <i class='bi bi-search'></i>
        <input type="text" id="pesquisaPlanta" placeholder="Pesquisar por plantas disponiveis"/>
    </div>

     <div className="menuCatalogo">
<section className="filtros">

  {/* TÍTULO */}

  <div className="tituloFiltros">

    <i className="bi bi-funnel"></i>

    <h2>Filtros</h2>

  </div>

  {/* CUIDADOS */}

  <FiltroGrupo titulo="Cuidados">

    <label className="filtro">
      <input type="checkbox" value="Digestão" />
      <span>Digestão</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Imunidade" />
      <span>Imunidade</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Relaxamento" />
      <span>Relaxamento</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Sono" />
      <span>Sono</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Pele" />
      <span>Pele</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Cabelos" />
      <span>Cabelos</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Cicatrização" />
      <span>Cicatrização</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Respiração" />
      <span>Respiração</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Dores" />
      <span>Dores</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Inflamação" />
      <span>Inflamação</span>
    </label>

  </FiltroGrupo>

  {/* CARACTERÍSTICAS */}

  <FiltroGrupo titulo="Características">

    <label className="filtro">
      <input type="checkbox" value="Aromática" />
      <span>Aromática</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Perfumada" />
      <span>Perfumada</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Comestível" />
      <span>Comestível</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Florífera" />
      <span>Florífera</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Frutífera" />
      <span>Frutífera</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Perene" />
      <span>Perene</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Anual" />
      <span>Anual</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Rasteira" />
      <span>Rasteira</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Trepadeira" />
      <span>Trepadeira</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Resistente" />
      <span>Resistente</span>
    </label>

  </FiltroGrupo>

  {/* ORIGEM */}

  <FiltroGrupo titulo="Origem">

    <label className="filtro">
      <input type="checkbox" value="Brasil" />
      <span>Brasil</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="América do Sul" />
      <span>América do Sul</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="América Central" />
      <span>América Central</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="América do Norte" />
      <span>América do Norte</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Europa" />
      <span>Europa</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Ásia" />
      <span>Ásia</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="África" />
      <span>África</span>
    </label>

  </FiltroGrupo>

  {/* CULTIVO */}

  <FiltroGrupo titulo="Cultivo">

    <label className="filtro">
      <input type="checkbox" value="Fácil" />
      <span>Fácil</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Moderado" />
      <span>Moderado</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Avançado" />
      <span>Avançado</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Em vasos" />
      <span>Em vasos</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Em jardins" />
      <span>Em jardins</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Em hortas" />
      <span>Em hortas</span>
    </label>

  </FiltroGrupo>

  {/* PORTE */}

  <FiltroGrupo titulo="Porte">

    <label className="filtro">
      <input type="checkbox" value="Pequeno" />
      <span>Pequeno</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Médio" />
      <span>Médio</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Grande" />
      <span>Grande</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Rasteiro" />
      <span>Rasteiro</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Arbustivo" />
      <span>Arbustivo</span>
    </label>

    <label className="filtro">
      <input type="checkbox" value="Trepadeira" />
      <span>Trepadeira</span>
    </label>

  </FiltroGrupo>

</section>

    {/* <!-- AREA DAS PLANTAS --> */}
   
    <article className="containerCardsCatalogo">
           <section className="catalogo">
             <div className="cardsCatalogo">
               {/* CARD 1 */}
               <div className="plantasCatalogo">
                 <Link to="/catalogo" className="quadroImg">
                   <img src="/img/orapronobis.webp" alt="Ora Pro Nobis" />
                 </Link>
                 <div className="textosCatalogo">
                   <h2 className="nomeP">Ora Pro Nobis</h2>
                   <h3 className="nomeC">Pereskia aculeata</h3>
                 </div>
               </div>
              

              {/* CARD 2 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/alecrim.webp" alt="Alecrim" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Alecrim</h2>
                <h3 className="nomeC">Salvia rosmarinus</h3>
              </div>
            </div>


            {/* CARD 3 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/pimentamacaco.webp" alt="Pimenta Macaco" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Pimenta Macaco</h2>
                <h3 className="nomeC">Xylopia aromatica</h3>
              </div>
            </div>


            {/* CARD 4 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/moringa.webp" alt="Moringa" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Moringa</h2>
                <h3 className="nomeC">Moringa oleifera</h3>
              </div>
            </div>


            {/* CARD 5 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/louro.webp" alt="Louro" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Louro</h2>
                <h3 className="nomeC">Laurus nobilis L.</h3>
              </div>
            </div>


            {/* CARD 6 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/guaco.webp" alt="Guaco" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Guaco</h2>
                <h3 className="nomeC">Mikania glomerata</h3>
              </div>
            </div>  

            {/* CARD 7 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/camomila.webp" alt="Camomila" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Camomila</h2>
                <h3 className="nomeC">Matricaria chamomilla</h3>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/hortela.webp" alt="Hortela" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Hortelã</h2>
                <h3 className="nomeC">Mentha spicata</h3>
              </div>
            </div>

            {/* CARD 9 */}
            <div className="plantasCatalogo">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/boldo.webp" alt="Boldo" />
              </Link>
              <div className="textosCatalogo">
                <h2 className="nomeP">Boldo</h2>
                <h3 className="nomeC">Plectranthus barbatus</h3>
              </div>
            </div>

            </div>           
            </section>   
    </article>
    </div>

        <Footer />
    </main>
      
  );
}

export default Catalogo;