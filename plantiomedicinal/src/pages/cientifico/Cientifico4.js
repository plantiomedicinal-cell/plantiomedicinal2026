import React from "react";
import { Link } from "react-router-dom";
import './Cientifico.css'

function Cientifico4 () {
    return(
        <main>

        <div className="borda">

    <article className="containerCientifico">            
        <section className="comeco">
            <h1>MORINGA</h1>
            <p className="nomeC">(Moringa oleifera)</p>
        </section>


        <section className="informacoes">

            <img className="imgCientifico" src="/img/moringa.webp" alt="Ora Pro Nobis" />
            
            <div class="categoriasPlantas">
                <h4>Principais Benefícios:</h4>
                <span class="categoriaItem">Sistema Imunológico</span>
                <span class="categoriaItem">Saúde Óssea</span>
                <span class="categoriaItem">Ação Antioxidante</span>
                 <span class="categoriaItem">Nutrição</span>
                  <span class="categoriaItem">Bem-estar Geral</span>
            </div>

    
        </section>
    </article>  

    <section className="blocoC">
       <h1 className="estudos">Estudo Científico da moringa</h1> 
       
       <p>A moringa (Moringa oleifera) é uma planta pertencente à família Moringaceae, amplamente conhecida por seu elevado valor nutricional e por suas propriedades medicinais. Originária do norte da Índia, atualmente é cultivada em diversas regiões tropicais e subtropicais do mundo. Seus compostos bioativos têm sido estudados por seus potenciais efeitos antioxidantes, anti-inflamatórios e nutricionais.</p>

    <div className="blocoT">
        <h2 className="estudos">Classificação Botânica</h2>

        <ul className="topicos">
            <li><strong>Nome científico:</strong> Moringa oleifera</li>
             <li><strong>Família:</strong> Moringaceae</li>
              <li><strong>Origem:</strong> Norte da Índia</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Composição Química</h2>

        <ul className="topicos">
            <li><strong>Vitamina C:</strong> Importante antioxidante natural.</li>
             <li><strong>Vitamina A: </strong> Essencial para a saúde ocular e imunológica.</li>
              <li><strong>Cálcio: </strong>Contribui para a saúde dos ossos e dentes.</li>
              <li><strong>Potássio:</strong>Auxilia no funcionamento muscular e nervoso.</li>
              <li><strong>Flavonoides:</strong>Compostos antioxidantes que ajudam na proteção celular</li>
              <li><strong>Proteínas Vegetais: </strong>Presentes em quantidade significativa nas folhas.</li>
        </ul>

    </div>

    <div className="blocoA">
        <h2 className="estudos">Propriedades Farmacológicas</h2>

        <ul className="topicos">
            <li><strong>Ação Antioxidante:</strong> Auxilia no combate aos radicais livres.</li>
             <li><strong>Ação Anti-inflamatória:</strong> Pode contribuir para a redução de processos inflamatórios..</li>
              <li><strong>Ação Nutritiva: </strong>  Rica em vitaminas, minerais e proteínas.</li>
              <li><strong>Ação Imunológica:</strong> Pode auxiliar no fortalecimento das defesas naturais do organismo.</li>
        </ul>

    </div>

    
    
    </section>
    </div>
        </main>

     );
}

export default Cientifico4;