import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico8 () {
    return(
        <main>

            <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>HORTELÃ</h1>
            <p className="nomeC">(Mentha spicata)</p>
        </section>



        <section className="informacoes">

            <img className="imgCientifico" src="/img/hortela.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Saúde Digestiva</span>
                <span class="categoriaItem">Ação Antioxidante</span>
                <span class="categoriaItem">Ação Antimicrobiana</span>
                <span class="categoriaItem">Bem-estar Respiratório</span>
                <span class="categoriaItem">Sensação Refrescante</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico da hortelã</h1> 
       
       <p>A hortelã (Mentha spicata) é uma planta aromática pertencente à família Lamiaceae, amplamente utilizada na culinária, na indústria farmacêutica e na medicina tradicional. Conhecida por seu aroma refrescante, a hortelã possui compostos bioativos que apresentam propriedades digestivas, antioxidantes e antimicrobianas.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong>Mentha spicata</li>
             <li><strong>Família:</strong>Lamiaceae</li>
              <li><strong>Origem:</strong>Europa e Ásia Ocidental</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Mentol:</strong>  Composto responsável pela sensação refrescante característica.</li>
             <li><strong>Mentona: </strong>Substância aromática presente no óleo essencial.</li>
              <li><strong>Flavonoides: </strong> Compostos antioxidantes que ajudam na proteção celular.</li>
              <li><strong>Ácido Rosmarínico: </strong>Possui propriedades antioxidantes e anti-inflamatórias.</li>
              <li><strong>Taninos:</strong>Compostos naturais com propriedades adstringentes.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Digestiva: </strong>Tradicionalmente utilizada para auxiliar na digestão.</li>
             <li><strong>Ação Antioxidante:</strong>Auxilia no combate aos radicais livres.</li>
              <li><strong>Ação Antimicrobiana:</strong>Pode contribuir para o controle de alguns microrganismos.</li>
              <li><strong>Ação Refrescante:</strong> Promove sensação de frescor e bem-estar.</li>
        </ul>

    </div>

    
    
    </section>
    </div>
        </main>

     );
}

export default Cientifico8;