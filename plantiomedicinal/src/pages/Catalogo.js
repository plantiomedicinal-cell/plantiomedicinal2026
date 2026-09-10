import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogo.css'

function Catalogo() {
  return (

    <main>
      <div>
         <h1 className="inicio">Conheça nosso
        <strong>CATÁLOGO COMPLETO!</strong>
    </h1>
    </div>

    <p>Principais receitas medicinais reunindo preparos naturais como chás, xaropes e infusões, com orientações simples para uso no dia a dia. Uma forma prática de aproveitar os benefícios das plantas para o bem-estar.
    </p>

    <div className="barraPesquisa">
        <input type="text" id="pesquisaPlanta" placeholder="Pesquisar planta"/>
    </div>

     <div className="menuCatalogo">
    <section className="filtros">

                <h2>Filtros:</h2>

                <ul className="listaFiltros">
                    <li><button class="filtroBtn" data-filter="Digestivos">Digestivas</button></li>
                    <li><button class="filtroBtn" data-filter="Calmantes">Calmantes</button></li>
                    <li><button class="filtroBtn" data-filter="Imunológicos">Imunológicos</button></li>
                    <li><button class="filtroBtn" data-filter="Cuidados da Pele">Cuidados da Pele</button></li>
                    <li><button class="filtroBtn" data-filter="Cicratizantes">Cicratizantes</button></li> 
                    <li><button class="filtroBtn" data-filter="Anti-Inflamátorios">Anti-Infamátorios</button></li>
                    <li><button class="filtroBtn" data-filter="Medicinais">Medicinais Brasileiras</button></li>  
                    <li><button class="filtroBtn" data-filter="Chás Tradicionais">Chás Tradicionais</button></li>  
                    <li><button class="filtroBtn" data-filter="Antioxidantes">Antioxidantes</button></li>                       
                </ul>

    </section>

    {/* <!-- AREA DAS PLANTAS --> */}
   
    <article className="containerCards">
           <section className="catalogoPrevia">
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

            {/* CARD 7 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/camomila.webp" alt="Camomila" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Camomila</h2>
                <h3 className="nomeC">Matricaria chamomilla</h3>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/hortela.webp" alt="Hortela" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Hortelã</h2>
                <h3 className="nomeC">Mentha spicata</h3>
              </div>
            </div>

            {/* CARD 9 */}
            <div className="plantasPrevia">
              <Link to="/catalogo" className="quadroImg">
                <img src="/img/boldo.webp" alt="Boldo" />
              </Link>
              <div className="textosPrevia">
                <h2 className="nomeP">Boldo</h2>
                <h3 className="nomeC">Plectranthus barbatus</h3>
              </div>
            </div>

            </div>           
            </section>   
    </article>
    </div>
    </main>
      

  );
}

export default Catalogo;