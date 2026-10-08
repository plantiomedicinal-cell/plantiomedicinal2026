import { Link } from 'react-router-dom';
import { useState } from "react";
import './Sobre.css';

import Footer from '../components/Footer';

function Sobre() {
  return (
    <main >
      <div className='body'>
    <div className="inicioSobre">
      <h1>Conheça a história do <strong>PLANTIO MEDICINAL</strong></h1>
      <p>Conectando saberes tradicionais, natureza e tecnologia para promover a saúde e o bem-estar de todos.</p>
    </div>

    <section className='valores'>
      <div className='topico'>

        <div className='icone'>
          <i class="bi bi-pin-angle-fill"></i>
        </div>

        <h2 className='titulo'>Nossa Missão</h2>
        <p className='descrever'>Disseminar o conhecimento sobre plantas medicinais de forma acessível, segura e orientada para o uso consciente no dia a dia.</p>

      </div>

      <div className='topico'>

        <div className='icone'>
          <i class="bi bi-eye-fill"></i>
        </div>

        <h2 className='titulo'>Nossa Vissão</h2>
        <p className='descrever'>Ser a maior comunidade e  catálogo digital de fitoterapia colaborativa, unindo tradições populares e estudos científicos.</p>

      </div>

      <div className='topico'>

        <div className='icone'>
          <i class="bi bi-heart-fill"></i>
        </div>

        <h2 className='titulo'>Nossos Valores</h2>
        <p className='descrever'>Sustentabilidade, respeito ao meio ambiente, colaboração comunitaria e busca contínua por bem-estar natural.</p>

      </div>

    </section>

    <article className='box'>
      <h2 className='titulo'>Como nasceu o Plantio Medicinal?</h2>
      <p className='descrever'>O projeto <strong>Plantio Medicinal</strong> surgiu com o objetivo de preservar e compartilhar os conhecimentos populares 
        sobre o uso de ervas e plantas medicinais. Percebemos que receitas caseiras, chás, xaropes e técnicas de cultivo 
        muitas vezes ficam restritas a gerações anteriores ou dispersas em fontes pouco acessíveis.</p> 


     <p className='descrever'>Criamos esta plataforma para reunir em um só lugar um <strong> Catálogo Completo de Espécies</strong>, sugestões práticas de 
        Receitas Medicinais e um espaço interativo de Comunidade, onde praticantes e entusiastas podem 
        <strong>trocar experiências, fotos e orientações sobre seus próprios jardins e cultivos.</strong></p>
    </article>

    <article className='topicosSpan'>

  <div className="sobreInfo">

    <div className="sobreSpan">

        <div className="textSpan">
            <b>+10</b>
            <span>Espécies Catalogadas</span>
        </div>
    </div>

    <div className="sobreSpan">

        <div className="textSpan">
            <b>+20</b>
            <span>Receitas Medicinais</span>
        </div>
    </div>


    <div className="sobreSpan">

        <div className="textSpan">
            <b>100%</b>
            <span>Colaborativo e Gratuito</span>
        </div>
    </div>
</div>

</article>

<div className='chamada'>
  <h3>Quer fazer parte da nossa comunidade?</h3>
  <p>Compartilhe suas receitas e tire dúvidas sobre suas plantas medicinais</p>


  <div className="verCatalogo">
              <Link to="/comunidade">
                <button className="botaoCatalogo">
                  <b>Ir para a Comunidade</b>
                </button>
              </Link>
            </div>

</div>

</div>

  <Footer />


</main>


  );
}



export default Sobre;