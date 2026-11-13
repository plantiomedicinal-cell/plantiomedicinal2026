
import React from "react";
import './Cientifico.css'

function Cientifico4 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>MORINGA</h1>
                    <p className="nomeC">(Moringa oleifera)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/moringa.webp" alt="Moringa" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Sistema Imunológico</span>
                        <span className="categoriaItem">Saúde Óssea</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                        <span className="categoriaItem">Nutrição</span>
                        <span className="categoriaItem">Bem-estar Geral</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico da Moringa</h1> 
                    
                    <p>A moringa (Moringa oleifera) é uma planta pertencente à família Moringaceae, amplamente conhecida por seu elevado valor nutricional e por suas propriedades medicinais. Originária do norte da Índia, atualmente é cultivada em diversas regiões tropicais e subtropicais do mundo. Seus compostos bioativos têm sido estudados por seus potenciais efeitos antioxidantes, anti-inflamatórios e nutricionais.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Moringa oleifera</li>
                            <li><strong>Família:</strong> Moringaceae</li>
                            <li><strong>Origem:</strong> Norte da Índia</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Vitamina C:</strong> Importante antioxidante natural.</li>
                            <li><strong>Vitamina A:</strong> Essencial para a saúde ocular e imunológica.</li>
                            <li><strong>Cálcio:</strong> Contribui para a saúde dos ossos e dentes.</li>
                            <li><strong>Potássio:</strong> Auxilia no funcionamento muscular e nervoso.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que ajudam na proteção celular.</li>
                            <li><strong>Proteínas Vegetais:</strong> Presentes em quantidade significativa nas folhas.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Antioxidante:</strong> Auxilia no combate aos radicais livres.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Pode contribuir para a redução de processos inflamatórios.</li>
                            <li><strong>Ação Nutritiva:</strong> Rica em vitaminas, minerais e proteínas.</li>
                            <li><strong>Ação Imunológica:</strong> Pode auxiliar no fortalecimento das defesas naturais do organismo.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico4;
