import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico6 () {
    return(
        <main>

        <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>GUACO</h1>
            <p className="nomeC">(Laurus nobilis)</p>
        </section>



        <section className="informacoes">

            <img className="imgCientifico" src="/img/guaco.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Saúde Respiratória</span>
                <span class="categoriaItem">Ação Expectorante</span>
                <span class="categoriaItem">Ação Broncodilatadora</span>
                <span class="categoriaItem">Ação Anti-inflamatória</span>
                <span class="categoriaItem">Ação Antioxidante</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico do guaco</h1> 
       
       <p>Estudos com guaco (Mikania glomerata e Mikania laevigata) investigam principalmente seus efeitos sobre o sistema respiratório. Pesquisas pré-clínicas apontam potencial anti-inflamatório, broncodilatador e expectorante, associado a compostos como a cumarina. Porém, revisões recentes destacam que ainda são necessários mais estudos clínicos para confirmar algumas dessas aplicações em humanos.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong>Mikania glomerata</li>
             <li><strong>Família:</strong>Asteraceae</li>
              <li><strong>Origem:</strong>América do Sul, especialmente Brasil</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Cumarina:</strong>Principal composto bioativo associado às propriedades respiratórias.</li>
             <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
              <li><strong>Taninos:</strong>Substâncias com propriedades adstringentes.</li>
              <li><strong>Óleos Essenciais:</strong> Compostos aromáticos presentes nas folhas</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Expectorante:</strong>Auxilia na eliminação de secreções das vias respiratórias.</li>
             <li><strong>Ação Broncodilatadora:</strong>Pode favorecer a passagem do ar pelos brônquios.</li>
              <li><strong>AAção Anti-inflamatória:</strong>Contribui para o alívio de inflamações leves.</li>
              <li><strong>Ação Antioxidante:</strong>Auxilia na proteção das células contra danos oxidativos.</li>
        </ul>


    </div>


    
    </section>

    </div>

        </main>

        

     );
}

export default Cientifico6;