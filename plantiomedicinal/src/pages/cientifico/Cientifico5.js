import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico5 () {
    return(
        <main>

        <div className="borda">
    <article className="containerCientifico">            
        <section className="comeco">
            <h1>LOURO</h1>
            <p className="nomeC">(Laurus nobilis)</p>
        </section>



        <section className="informacoes">

            <img className="imgCientifico" src="/img/louro.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Saúde Digestiva</span>
                <span class="categoriaItem">Ação Antioxidante</span>
                <span class="categoriaItem">Bem-estar Respiratório</span>
                 <span class="categoriaItem">Ação Anti-inflamatória</span>
                  <span class="categoriaItem">Saúde Geral</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico do louro</h1> 
       
       <p>O louro (Laurus nobilis) é uma planta aromática pertencente à família Lauraceae, amplamente utilizada na culinária e na medicina tradicional. Originário da região do Mediterrâneo, o louro é conhecido por suas folhas ricas em compostos bioativos que apresentam propriedades antioxidantes, digestivas e anti-inflamatórias.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong>Laurus nobilis</li>
             <li><strong>Família:</strong> Lauraceae</li>
              <li><strong>Origem:</strong>Região do Mediterrâneo</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Cineol:</strong>Composto presente no óleo essencial com propriedades aromáticas.</li>
             <li><strong>Eugenol:</strong>Substância com potencial antioxidante e anti-inflamatório.</li>
              <li><strong>Taninos: </strong>Compostos que auxiliam na proteção contra microrganismos.</li>
              <li><strong>Flavonoides:</strong> Antioxidantes naturais que ajudam na proteção celular.</li>
              <li><strong>Linalol:</strong>Componente aromático presente nas folhas.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Digestiva: </strong> Tradicionalmente utilizado para auxiliar na digestão.</li>
             <li><strong>Ação Antioxidante: </strong>Contribui para a proteção das células contra os radicais livres.</li>
              <li><strong>Ação Anti-inflamatória: </strong>Pode auxiliar na redução de inflamações leves.</li>
              <li><strong>Ação Antimicrobiana:</strong>Alguns compostos apresentam atividade contra microrganismos.</li>
        </ul>

    </div>

    
    
    </section>
    </div>
        </main>

     );
}

export default Cientifico5;