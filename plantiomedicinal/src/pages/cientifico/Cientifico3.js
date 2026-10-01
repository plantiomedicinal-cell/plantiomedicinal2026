import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico3 () {
    return(
        <main>

        <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>PIMENTA MACACO</h1>
            <p className="nomeC">(Piper aduncum)</p>
        </section>


        <section className="informacoes">

            <img className="imgCientifico" src="/img/pimentamacaco.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Ação Antimicrobiana</span>
                <span class="categoriaItem">Ação Anti-inflamatória</span>
                <span class="categoriaItem">Ação Antioxidante</span>
                <span class="categoriaItem">Cuidados com a Pele</span>
                <span class="categoriaItem">Repelente Natural</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico da pimenta macaco</h1> 
       
       <p>A pimenta-de-macaco (Piper aduncum) é uma planta medicinal pertencente à família Piperaceae, amplamente distribuída nas regiões tropicais da América do Sul. Tradicionalmente utilizada por comunidades indígenas e populações rurais, tem despertado interesse científico devido às suas propriedades antimicrobianas, anti-inflamatórias e repelentes naturais.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong> Piper aduncum</li>
             <li><strong>Família:</strong> Piperaceae</li>
              <li><strong>Origem:</strong>  América Tropical, especialmente Brasil, Peru e Amazônia</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Dilapiol:</strong> Principal composto do óleo essencial, com ação inseticida e antimicrobiana.</li>
             <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
              <li><strong>Taninos</strong>Possuem ação adstringente e antimicrobiana.</li>
              <li><strong>Terpenos</strong>Substâncias presentes no óleo essencial com potencial terapêutico.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Antimicrobiana</strong> Estudos demonstram atividade contra alguns fungos e bactérias</li>
             <li><strong>Ação Anti-inflamatória:</strong>  Pode auxiliar na redução de inflamações leves.</li>
              <li><strong>Ação Antioxidante:</strong>Contribui para a proteção das células contra os radicais livres.</li>
              <li><strong>Ação Repelente:</strong>O óleo essencial é estudado como repelente natural contra insetos.</li>
        </ul>


    </div>


    
    </section>

    </div>

        </main>

        

     );
}

export default Cientifico3;