import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico2 () {
    return(
        <main>

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>ALECRIM</h1>
            <p className="nomeC">(Salvia rosmarinus)</p>
        </section>

        <hr className="divisao2"></hr>


        <section className="informacoes">

            <img className="imgCientifico" src="/img/alecrim.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <span class="categoriaItem">Imunológica</span>
                <span class="categoriaItem">Cuidado da Pele</span>
                <span class="categoriaItem">Cognição e Foco</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico do alecrim</h1> 
       
       <p>O alecrim (Salvia rosmarinus) é um subarbusto aromático da família Lamiaceae, originário da região do Mediterrâneo.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong> Salvia rosmarinus</li>
             <li><strong>Família:</strong> Lamiaceae</li>
              <li><strong>Origem:</strong> Região do Mediterrâneo</li>
        </ul>

    </div>

    <div className="blocoT">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Ácido Carnósico e Rosmarínico:</strong> Antioxidantes naturais.</li>
             <li><strong>1,8-Cineol e Cânfora:</strong> Compostos do óleo essencial com ação antimicrobiana.</li>
              <li><strong>Ácido Ursólico:</strong>Ativo com ação anti-inflamatória.</li>
        </ul>

    </div>

    <div className="blocoT">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Antioxidante:</strong> Combate o envelhecimento celular.</li>
             <li><strong>Efeito Neuroprotetor:</strong>  Auxilia na melhora da memória e cognição.</li>
              <li><strong>Antimicrobiano:</strong> Inibe o crescimento de fungos e bactérias.</li>
        </ul>

    </div>

    
    
    </section>
        </main>

     );
}

export default Cientifico2;