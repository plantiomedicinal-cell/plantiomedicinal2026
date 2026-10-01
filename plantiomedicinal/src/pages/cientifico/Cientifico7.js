import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico7 () {
    return(
        <main>

            <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>CAMOMILA</h1>
            <p className="nomeC">(Matricaria chamomilla)</p>
        </section>



        <section className="informacoes">

            <img className="imgCientifico" src="/img/camomila.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Ação Calmante</span>
                <span class="categoriaItem">Qualidade do Sono</span>
                <span class="categoriaItem">Saúde Digestiva</span>
                <span class="categoriaItem">Ação Anti-inflamatória</span>
                <span class="categoriaItem">Ação Antioxidante</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico da camomila</h1> 
       
       <p>A camomila (Matricaria chamomilla) é uma planta medicinal pertencente à família Asteraceae, amplamente utilizada em diversas culturas devido às suas propriedades calmantes e digestivas. Originária da Europa e da Ásia Ocidental, a camomila é uma das plantas mais estudadas e consumidas na forma de chá em todo o mundo.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong> Matricaria chamomilla</li>
             <li><strong>Família:</strong> Asteraceae</li>
              <li><strong>Origem:</strong>  Europa e Ásia Ocidental</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Apigenina:</strong> Flavonoide associado às propriedades calmantes da planta.</li>
             <li><strong>Bisabolol: </strong>Composto com potencial ação anti-inflamatória.</li>
              <li><strong>Camazuleno: </strong> Substância presente no óleo essencial da camomila.</li>
              <li><strong>Flavonoides: </strong>Compostos antioxidantes que auxiliam na proteção celular.</li>
              <li><strong>Cumarinas:</strong>Substâncias naturais presentes em pequenas quantidades.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Calmante:</strong>Tradicionalmente utilizada para promover relaxamento.</li>
             <li><strong>Ação Digestiva:</strong>Pode auxiliar no alívio de desconfortos gastrointestinais.</li>
              <li><strong>Ação Anti-inflamatória:</strong>Contribui para a redução de inflamações leves.</li>
              <li><strong>Ação Antioxidante:</strong>Auxilia na proteção das células contra os radicais livres.</li>
        </ul>

    </div>

    
    
    </section>
    </div>
        </main>

     );
}

export default Cientifico7;