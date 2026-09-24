import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico1 () {
    return(
        <main>

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>ORA-PRO-NOBIS</h1>
            <p className="nomeC">(Pereskia aculeata)</p>
        </section>

        <hr className="divisao2"></hr>


        <section className="informacoes">

            <img className="imgCientifico" src="/img/orapronobis.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <span class="categoriaItem">Imunológica</span>
                <span class="categoriaItem">Saúde Instestinal</span>
                <span class="categoriaItem">Fortalecimento Ósseo</span>
                <span class="categoriaItem">Nutrição e Saciedade</span>
                <span class="categoriaItem">Combate à Anemia</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico da Ora Pro Nóbis</h1> 
       
       <p>A ora-pro-nóbis (Pereskia aculeata) é uma planta alimentícia não convencional (PANC) pertencente à família Cactaceae. <br></br> Originária da América do Sul, destaca-se pelo elevado teor de proteínas, fibras, vitaminas e minerais, sendo amplamente utilizada na alimentação e estudada por seus potenciais benefícios nutricionais.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong> Pereskia aculeata</li>
             <li><strong>Família:</strong> Cactaceae</li>
              <li><strong>Origem:</strong> América do Sul, especialmente Brasil, Argentina e Paraguai</li>
        </ul>

    </div>

    <div className="blocoT">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Proteínas Vegetais:</strong> Possui teor proteico superior ao de muitas hortaliças.</li>
             <li><strong>Fibras Alimentares:</strong>  Auxiliam no funcionamento intestinal.</li>
              <li><strong>Vitamina C:</strong>Atua como antioxidante natural</li>
              <li><strong>Vitamina A (Carotenoides):</strong>Importante para a saúde ocular e imunológica.</li>
              <li><strong>Cálcio, Ferro e Magnésio:</strong>Minerais essenciais para diversas funções do organismo.</li>
        </ul>

    </div>

    <div className="blocoT">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Antioxidante:</strong> Combate os radicais livres que podem causar danos celulares.</li>
             <li><strong>Efeito Neuroprotetor:</strong> Fonte de proteínas, vitaminas e minerais.</li>
              <li><strong>Antimicrobiano:</strong> O alto teor de fibras favorece o trânsito intestinal.</li>
              <li><strong>Potencial Anti-inflamatório:</strong> Estudos indicam a presença de compostos bioativos com ação anti-inflamatória.
</li>
        </ul>

    </div>

    
    
    </section>
        </main>

     );
}

export default Cientifico1;