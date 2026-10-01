import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico9 () {
    return(
        <main>

            <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>BOLDO</h1>
            <p className="nomeC">(Plectranthus barbatus)</p>
        </section>



        <section className="informacoes">

            <img className="imgCientifico" src="/img/boldo.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Saúde Digestiva</span>
                <span class="categoriaItem">Saúde Hepática</span>
                <span class="categoriaItem">Ação Antioxidante</span>
                <span class="categoriaItem">Bem-estar Gastrointestinal</span>
                <span class="categoriaItem">Ação Anti-inflamatória</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico do boldo</h1> 
       
       <p>O boldo (Plectranthus barbatus), também conhecido como boldo-brasileiro, é uma planta medicinal pertencente à família Lamiaceae. Tradicionalmente utilizada para auxiliar na digestão e na saúde do fígado, o boldo possui compostos bioativos que despertam interesse científico por suas propriedades digestivas e antioxidantes.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong>Plectranthus barbatus</li>
             <li><strong>Família:</strong>Lamiaceae</li>
              <li><strong>Origem:</strong>África Tropical, amplamente cultivado no Brasil</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Forscolina:</strong>Composto bioativo estudado por seus efeitos fisiológicos.</li>
             <li><strong>Óleos Essenciais: </strong>Responsáveis pelo aroma característico da planta.</li>
              <li><strong>Flavonoides: </strong>Compostos antioxidantes que auxiliam na proteção celular.</li>
              <li><strong>Taninos:</strong>Substâncias com propriedades adstringentes.</li>
              <li><strong>Diterpenos:</strong>Compostos naturais presentes em suas folhas.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Digestiva: </strong>Tradicionalmente utilizado para auxiliar na digestão.</li>
             <li><strong>Ação Hepatoprotetora:</strong>Associado à proteção e ao funcionamento saudável do fígado.</li>
              <li><strong>Ação Antioxidante:</strong>Auxilia no combate aos radicais livres.</li>
              <li><strong>Ação Anti-inflamatória:</strong>Pode contribuir para a redução de inflamações leves.</li>
        </ul>

    </div>

    
    
    </section>
    </div>
        </main>

     );
}

export default Cientifico9;